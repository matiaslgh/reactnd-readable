import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../App.css'
import Nav from './Nav'
import Posts from './Posts'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <br/>
        <Route exact path="/" component={Posts}/>
        <Route exact path="/:category" component={Posts}/>
      </div>
    );
  }
}

export default App
