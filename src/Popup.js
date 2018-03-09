import React from 'react'

class Popup extends React.Component {
  state = {
    description: ''
  }

  componentWillMount() {
    if (this.props.shelf === 'currentlyReading') {
      this.setState({ description: 'Moved to "Currently Reading"'})
    } else if (this.props.shelf === 'wantToRead') {
      this.setState({ description: 'Moved to "Want to Read"'})
    } else if (this.props.shelf === 'read') {
      this.setState({ description: 'Moved to "Read"'})
    } else {
      this.setState({ description: 'Trashed'})
    }
  }

  render() {
    return (
      <div className="popup-container">
        <p>Book "{this.props.book.title}" has been {this.props.text}</p>
        <img src={this.props.book.imageLinks.smallThumbnail} alt="" />
        <p className="description">{this.state.description}</p>
      </div>
    )
  }
}

export default Popup
