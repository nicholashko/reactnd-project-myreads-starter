import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then( (books) =>
      this.setState( { books } )
    )
  }

  updateBook = (book, shelf) => {
    if(shelf==="none") {
      this.setState( (state) => ({
        books: state.books.filter( (b) => b.id !== book.id )
      }))
    } else {
      book.shelf = shelf;
      this.setState( (state) => ({
        books: state.books.filter( (b) => b.id !== book.id ).concat([book])
      }))
    }
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={ () => (
          <SearchBooks books={ this.state.books } onUpdateBook={this.updateBook} />
        )}/>
        <Route exact path='/' render={ () => (
          <ListBooks books={ this.state.books } onUpdateBook={this.updateBook} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
