import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

class BookShelf extends Component {

  static propTypes = {
    books : PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <BooksGrid
            books={this.props.books}
            onUpdateBook={this.props.onUpdateBook}
          />
        </div>
      </div>
    )
  }
}

export default BookShelf