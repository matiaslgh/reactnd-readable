import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateCategory } from '../actions/categoryAction'
import Header from './Header'
import CategoriesDrawer from './CategoriesDrawer'
import Posts from './Posts'
import '../styles/App.css'

class App extends Component {
  render() {
    const { updateCategory } = this.props
    return (
      <div className="root">
        <div className="appFrame">
          <Header />
          <CategoriesDrawer />
          <Route exact path="/" render={ ({ match }) => {
            updateCategory('All')
            return (<Posts />)
          }} />
          <Route exact path="/:category" render={ ({ match }) => {
            updateCategory(match.params.category)
            return (<Posts />)
          }} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCategory: category => dispatch(updateCategory(category))
})

export default withRouter(connect(()=>({}), mapDispatchToProps)(App))
