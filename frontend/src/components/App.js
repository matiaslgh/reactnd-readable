import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../App.css'
import Nav from './Nav'
import Posts from './Posts'
import * as api from '../utils/api'

class App extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    api.getCategories().then(categories => this.setState({ categories }))
  }

  render() {
    return (
      <div>
        <Nav categories={this.state.categories}/>
        <Route exact path="/:category" component={Posts}/>
      </div>
    );
  }
}

export default App
