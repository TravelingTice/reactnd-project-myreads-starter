import React from 'react'

class Popup extends React.Component {
  render() {
    let description;
    if (this.props.shelf === 'currentlyReading') {
      description = 'Moved to "Currently Reading"'
    } else if (this.props.shelf === 'wantToRead') {
      description = 'Moved to "Want to Read"'
    } else if (this.props.shelf === 'read') {
      description = 'Moved to "Read"'
    } else {
      description = ''
    }
    return (
      <div className="popup-container">
        <p>Book has been {this.props.text}</p>
        <img src={this.props.book.imageLinks.smallThumbnail} alt="" />
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default Popup
