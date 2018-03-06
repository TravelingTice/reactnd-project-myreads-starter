import React from 'react'
import './App.css'
// Import components from React Router
import { Route } from 'react-router-dom'
// Import components
import Library from './Library.js'
import Search from './Search'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          component={Library}
        />
        <Route
          exact path="/search"
          component={Search}
        />
      </div>
    )
  }
}

export default BooksApp
