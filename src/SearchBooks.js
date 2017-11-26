import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'
import * as BooksAPI from './BooksAPI'
import { Debounce } from 'react-throttle';

class SearchBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  state = {
    books: [],
    message: ''
  }

  searchBooks = (queryString) => {
     if(queryString.length > 0) {
      console.log(`Querying for: ${queryString}`)
      BooksAPI.search(queryString).then( (booksResult) => {
        // if nothing is found the BooksAPI will return: {error: "empty query", items: Array(0)}
        // so we check for that here so we can let the user know there are no results found.
        if(booksResult.error) {
          this.setState( { books: [], message: 'No books found' } )
        } else {
          this.setState({
            books: booksResult.map( (bookResult) => {
              // This checks if the book is already on the shelf and replaces the search result object.
              // This ensures that the book object has a "shelf" property that is set. This is so the
              // action menu can be set correctly in the search results.
              return this.props.books.filter( (shelfBook) => bookResult.id === shelfBook.id )[0] || bookResult
            }),
            message: `${booksResult.length} books found`
          })
        }
      })
    }
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="400" handler="onChange">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={ (event) => this.searchBooks(event.target.value) } />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <div>{this.state.message}</div>
          <BooksGrid books={this.state.books} onUpdateBook={this.props.onUpdateBook} />
        </div>
      </div>
    )
  }
}

export default SearchBooks