import React, { Component } from 'react';
import '../App.css'
import Nav from './Nav'
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
      </div>
    );
  }
}

export default App;
