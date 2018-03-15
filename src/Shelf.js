import React from 'react'
// Components
import Book from './Book'

class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.heading}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
            <li key={book.id}>
              <Book
              shelfChanged={this.props.shelfChanged}
              page='library'
              book={book} />
            </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
