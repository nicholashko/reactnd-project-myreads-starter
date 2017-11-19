import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ListBooks extends Component {

  static propTypes = {
    books : PropTypes.array.isRequired
  }

	render() {
		return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
            	shelfTitle="Currently Reading"
            	books={this.props.books.filter( (book) => book.shelf === "currentlyReading" )}
            />
            <BookShelf
            	shelfTitle="Want to read"
            	books={this.props.books.filter( (book) => book.shelf === "wantToRead" )}
            />
            <BookShelf
            	shelfTitle="Read"
            	books={this.props.books.filter( (book) => book.shelf === "read" )}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
   	)
  }
}

export default ListBooks