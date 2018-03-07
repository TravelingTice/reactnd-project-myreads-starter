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

  updateQuery = e => {
    this.setState({ query: e.target.value })
  }

  search = e => {
    // If user pressed the 'enter' key, the query will get sent
    if(e.keyCode === 13) {
      // If nothing is typed
      if (e.target.value.trim() === '') {
        this.setState({ query: '', matchedBooks: [], wrongQuery: false })
      } else {
        BooksAPI.search(this.state.query)
        .then(books => {
          this.setState({ matchedBooks: books, wrongQuery: false })
        })
        // If no books were found (query wasn't right)
        .catch(err => {
          this.setState({ query: '', matchedBooks: [], wrongQuery: true })
          console.log(this.state.matchedBooks, err)
        })
      }
    }
  }

  render() {
    // This is for replacing the matchedbooks with books that are in our library (with the shelf property) in the listed books.
    // Compare the 2 arrays for matched books
      this.state.matchedBooks.forEach((book, index) => {
        this.props.libBooks.forEach(libBook => {
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
                onChange={(e) => this.updateQuery(e)}
                onKeyUp={(e) => this.search(e)}
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
                  putOnShelf={this.props.putOnShelf}
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
