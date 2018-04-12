import React from 'react'

class Popup extends React.Component {
  state = {
    description: '',
    styles: {
      opacity: 0,
      transform: 'translateY(-20px)'
    }
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

  componentDidMount() {
    setTimeout(() => {
      this.setState({ styles: { opacity: 1, transform: 'translateY(0px)' }});
    }, 0)
    setTimeout(() => {
      this.setState({ styles: { opacity: 0, transform: 'translateY(-20px)' }});
    }, 3000)
  }

  render() {
    return (
      <div className="popup-container" style={{ transition: 'all 0.5s ease-in', opacity: this.state.styles.opacity, transform: this.state.styles.transform }}>
        <p>Book "{this.props.book.title}" has been {this.props.text}</p>
        <img src={this.props.book.imageLinks.smallThumbnail} alt="" />
        <p className="description">{this.state.description}</p>
      </div>
    )
  }
}

export default Popup
