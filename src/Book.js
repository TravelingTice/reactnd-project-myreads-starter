import React from 'react'

class Book extends React.Component {
  render () {
    return (
      <li key={this.props.book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
            <div className="book-shelf-changer">
            {/* Controlled component: When value of select changes -> the shelf of the book gets updated and dom re-rendered*/}
              <select value={this.props.book.shelf} onChange={e => this.props.onChangeShelf(this.props.book, e.target.value)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="trash">Trash</option>
                //TODO: There is one book with property 'none' on it, try to recover that one and put it in trash
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          {this.props.book.authors.map((author, index) => (
            <div className="book-authors" key={"author" + index}>{author}</div>
          ))}
        </div>
      </li>
    )
  }
}

export default Book
