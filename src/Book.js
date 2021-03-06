import React from 'react'
import * as BooksAPI from './BooksAPI'

import { Route } from 'react-router-dom'

class Book extends React.Component {
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      if (this.props.shelfChanged) {
        let text = '';
        if (this.props.page === 'library') {
          text = shelf === 'none' ? 'trashed!' : 'moved!';
        }
        if (this.props.page === 'search') {
          text = shelf === 'none' ? 'trashed' : 'added to library!';
        }
        this.props.shelfChanged(book, shelf, text);
      }
    })
  }

  render () {
    // Check if thumbnail exists
    let thumbnail;
    if (this.props.book.imageLinks) {
      if (this.props.book.imageLinks.smallThumbnail) {
        thumbnail = this.props.book.imageLinks.smallThumbnail
      } else {
        thumbnail = '/img/noThumbnail.png'
      }
    } else {
      thumbnail = '/img/noThumbnail.png'
    }

    return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
            <Route
              exact path="/"
              render={() => (
                <div className="book-shelf-changer">
                  <select
                    value={this.props.book.shelf}
                    onChange={e => this.changeShelf(this.props.book, e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">Trash</option>
                  </select>
                </div>
              )}
            />
            <Route
              exact path="/search"
              render={() => (
              <div className="book-shelf-changer">
                {this.props.book.shelf && this.props.book.shelf !== 'none' ? (
                  <select
                    value={this.props.book.shelf}
                    onChange={e => this.changeShelf(this.props.book, e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">Trash</option>
                  </select>
                ) : (
                  <select
                     value={'none'}
                     onChange={e => this.changeShelf(this.props.book, e.target.value)}>
                     <option value="none" disabled>Move to...</option>
                     <option value="currentlyReading">Currently Reading</option>
                     <option value="wantToRead">Want to Read</option>
                     <option value="read">Read</option>
                   </select>
                )}
              </div>
              )}
            />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          {this.props.book.authors !== undefined && (
            this.props.book.authors.map((author, index) => (
              <div className="book-authors" key={"author" + index}>{author}</div>
            ))
          )}
        </div>
    )
  }
}

export default Book
