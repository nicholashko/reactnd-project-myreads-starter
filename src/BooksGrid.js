import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksGrid extends Component {

  static propTypes = {
    books : PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {
    return(
      <div>
        <ol className="books-grid">
        { this.props.books.map( book =>
          <li key={book.id} >
            <Book
              book={book}
              onUpdateBook={this.props.onUpdateBook}
            />
          </li>
        )}
        </ol>
      </div>
    )
  }
}

export default BooksGrid