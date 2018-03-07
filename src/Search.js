import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
// Import components
import Book from './Book'


class Search extends React.Component {
  state = {
    query: '',
    matchedBooks: []
  }

  updateQuery = e => {
    this.setState({ query: e.target.value })
  }

  search = e => {
    // If user pressed the 'enter' key, the query will get sent
    if(e.keyCode === 13) {
      BooksAPI.search(this.state.query)
      .then(books => {
        this.setState({ matchedBooks: books })
      })
    }
  }

  render() {
    // This is for replacing the matchedbooks with books that are in our library (with the shelf property) in the listed books.
    this.state.matchedBooks.sort();
    this.props.libBooks.sort();
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
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
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
          </div>
        </div>
    )
  }
}

export default Search
