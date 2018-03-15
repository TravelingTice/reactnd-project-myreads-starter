import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
// Import components
import Book from './Book'


class Search extends React.Component {
  state = {
    query: '',
    matchedBooks: [],
    // When true, a text appears that says the query had no results
    wrongQuery: false,
  }

  search = e => {
      // Make a search request
      this.setState({ query: e.target.value })
      BooksAPI.search(this.state.query)
      .then(books => {
        // If nothing is typed
        if (this.state.query.trim() === '') {
          this.setState({ query: '', matchedBooks: [], wrongQuery: false})
        } else {
          this.setState({ matchedBooks: books, wrongQuery: false })
        }
      })
      // If no books were found (query wasn't right)
      .catch(err => {
        this.setState({ matchedBooks: [], wrongQuery: true })
      })
    }

  render() {
    // This is for replacing the matchedbooks with books that are in our library (with the shelf property) in the listed books.
    // Compare the 2 arrays for matched books
      this.state.matchedBooks.forEach((book, index) => {
        this.props.books.forEach(libBook => {
          if(book.id === libBook.id) {
            this.state.matchedBooks.splice(index, 1, libBook)
          }
        })
      })
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(e) => this.search(e)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
             {this.state.matchedBooks.length > 0 && (
              this.state.matchedBooks.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  shelfChanged={this.props.shelfChanged}
                  page='search'
                />
              </li>
              ))
            )}
            </ol>
            {/* If no books were found */}
            {this.state.wrongQuery ? (
              <div>No books were found!</div>
            ) : (
              null
            )}
          </div>
        </div>
    )
  }
}

export default Search
