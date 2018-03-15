import React from 'react'
import { Link } from 'react-router-dom'
// Components
import Shelf from './Shelf'

class Library extends React.Component {
  state = {
    shelves: [{
      name: 'currentlyReading',
      heading: 'Currently Reading'
    },{
      name: 'wantToRead',
      heading: 'Want to Read'
    },{
      name: 'read',
      heading: 'Read'
    }]
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.shelves.map((shelf, index) => (
              <Shelf
                key={shelf.name + index}
                shelf={shelf.name}
                heading={shelf.heading}
                books={this.props.books.filter(book => book.shelf === shelf.name)}
                shelfChanged={this.props.shelfChanged}
              />
            ))}
          </div>
        </div>
        {/* The plus-icon in the bottom-right corner will change path to /search and so send us to the search component */}
        <div className="open-search">
          <Link
            to="/search"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Library
