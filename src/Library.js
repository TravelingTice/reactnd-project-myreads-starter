import React from 'react'
import { Link } from 'react-router-dom'
// Components
import Shelf from './Shelf'

class Library extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              shelf='currentlyReading'
              heading='Currently Reading'
              libBooks={this.props.libBooks}
              onChangeShelf={this.props.onChangeShelf}
              putOnShelf={this.props.putOnShelf}
            />

            <Shelf
              shelf='wantToRead'
              heading='Want to Read'
              libBooks={this.props.libBooks}
              onChangeShelf={this.props.onChangeShelf}
              putOnShelf={this.props.putOnShelf}
            />

            <Shelf
              shelf='read'
              heading='Read'
              libBooks={this.props.libBooks}
              onChangeShelf={this.props.onChangeShelf}
              putOnShelf={this.props.putOnShelf}
            />
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
