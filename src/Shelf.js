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
          {/* Books for "Currently Reading" go here!
            Each book with shelf: book with right property will get filtered out of list and a component will be inserted for each appropriate book*/}
            {this.props.libBooks.filter(book => book.shelf === this.props.shelf).map(book => (
            <li key={book.id}>
              <Book
                onChangeShelf={this.props.onChangeShelf}
                putOnShelf={this.props.putOnShelf}
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
