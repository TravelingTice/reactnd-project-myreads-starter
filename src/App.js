import React from 'react'
// Import components from React Router
import { Route } from 'react-router-dom'
// Local imports
import * as BooksAPI from './BooksAPI'
import './App.css'
// Import components
import Library from './Library.js'
import Search from './Search'
import Popup from './Popup'

class BooksApp extends React.Component {
  state = {
    // An array of books currently in our library
    libBooks: [],
    // Needed for information in the popup
    showPopup: false,
    popupTxt: '',
    affectedBook: {},
    affectedShelf: ''
  }

  // Open the popup window, after 3 sec, the popup will disappear again
  onShowPopup = (txt, book, shelf) => {
    this.setState({ showPopup: true, popupTxt: txt,  affectedBook: book, affectedShelf: shelf })
    setTimeout(() => {
      this.setState({ showPopup: false, popupTxt: '', affectedBook: {}, affectedShelf: '' })
    }, 3500)
  }

  // Fetch the books we have in our library once the component is mounted, insert those in our state
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ libBooks: books})
    })
  }

  // Change shelf property of book to value of shelf ("wantToRead", "currentlyReading", "read")
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ libBooks: books })
      }).then(() => {
        if(shelf === 'none') {
          this.onShowPopup('trashed!', book, shelf)
        } else {
          this.onShowPopup('moved!', book, shelf)
        }
      })
    })
  }

  // Updates shelf property of book in server, the query will clear
  putOnShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ libBooks: books })
      }).then(() => {
        if(shelf === 'none') {
          this.onShowPopup('trashed!', book, shelf)
        } else {
          this.onShowPopup('added to the library!', book, shelf)
        }
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <Library
              libBooks={this.state.libBooks}
              onChangeShelf={this.changeShelf}
            />
          )}
        />
        <Route
          exact path="/search"
          render={() => (
            <Search
              libBooks={this.state.libBooks}
              putOnShelf={this.putOnShelf}
            />
          )}
        />
        {this.state.showPopup ? (
          <Popup
            text={this.state.popupTxt}
            book={this.state.affectedBook}
            shelf={this.state.affectedShelf}
          />
        ) : (
          null
        )}
      </div>
    )
  }
}

export default BooksApp
