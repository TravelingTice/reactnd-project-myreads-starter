import React from 'react'
// Import components from React Router
import { Route } from 'react-router-dom';
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
    books: [],
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
      this.setState({ books: books})
    })
  }

  // Change shelf property of book to value of shelf ("wantToRead", "currentlyReading", "read")
  shelfChanged = (book, shelf, text) => {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books })
    }).then(() => {
      this.onShowPopup(text, book, shelf)
    })
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <Library
              books={this.state.books}
              shelfChanged={this.shelfChanged}
            />
          )}
        />
        <Route
          exact path="/search"
          render={() => (
            <Search
              books={this.state.books}
              shelfChanged={this.shelfChanged}
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
