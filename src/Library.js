import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class Library extends React.Component {
  state = {
    // An array of books currently in our library
    books: [],
  }

  // Change shelf property of book to value of shelf ("wantToRead", "currentlyReading", "read")
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ books: books })
      })
    })
  }

  // Fetch the books we have in our library once the component is mounted, insert those in our state
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books})
    })
  }

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
                {/* Books for Currently Reading go here!
                  Each book with shelf: book with right property will get filtered out of list and a component will be inserted for each appropriate book*/}
                  {this.state.books.filter(book => book.shelf === "currentlyReading").map((book) => (
                    <Book
                      onChangeShelf={this.changeShelf}
                      book={book} />
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {/* Books for Want to Read go here!*/}
                {this.state.books.filter(book => book.shelf === "wantToRead").map(book => (
                  <Book
                    onChangeShelf={this.changeShelf}
                    book={book} />
                ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {/* Books for Read go here!!!!!!!!*/}
                {this.state.books.filter(book => book.shelf === "read").map(book => (
                  <Book
                    onChangeShelf={this.changeShelf}
                    book={book} />
                ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
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
