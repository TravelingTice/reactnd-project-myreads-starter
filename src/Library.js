import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

class Library extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {/* Books for "Currently Reading" go here!
                  Each book with shelf: book with right property will get filtered out of list and a component will be inserted for each appropriate book*/}
                  {this.props.libBooks.filter(book => book.shelf === "currentlyReading").map(book => (
                  <li key={book.id}>
                    <Book
                      onChangeShelf={this.props.onChangeShelf}
                      book={book} />
                  </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {/* Books for "Want to Read" go here!*/}
                {this.props.libBooks.filter(book => book.shelf === "wantToRead").map(book => (
                  <li key={book.id}>
                    <Book
                      onChangeShelf={this.props.onChangeShelf}
                      book={book} />
                  </li>
                ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {/* Books for "Read" go here!*/}
                {this.props.libBooks.filter(book => book.shelf === "read").map(book => (
                  <li key={book.id}>
                    <Book
                      onChangeShelf={this.props.onChangeShelf}
                      book={book} />
                  </li>
                ))}
                </ol>
              </div>
            </div>
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
