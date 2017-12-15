import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeCategory } from '../actions/categoriesAction'
import Header from './Header'
import CategoriesDrawer from './CategoriesDrawer'
import PostDetail from './PostDetail'
import Posts from './Posts'
import '../styles/App.css'

class App extends Component {
  render() {
    const { changeCategory } = this.props
    return (
      <div className="root">
        <div className="appFrame">
          <Header />
          <CategoriesDrawer />
          <Route exact path="/" render={ ({ match }) => {
            changeCategory('All')
            return (<Posts />)
          }} />
          <Route exact path="/:category" render={ ({ match }) => {
            changeCategory(match.params.category)
            return (<Posts />)
          }} />
          <Route exact path="/:category/:post_id" component={PostDetail} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  changeCategory: category => dispatch(changeCategory(category))
})

export default withRouter(connect(()=>({}), mapDispatchToProps)(App))
