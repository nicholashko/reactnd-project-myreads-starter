import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

  static propTypes = {
    books : PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired
  }

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {console.log(this.props.books)}
          { this.props.books.map( book =>
            <li key={book.id} >
              <Book book={book} />
            </li>
          )}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf