import React, { Component } from 'react';
import '../App.css'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div>
        <Nav categories={['a','b','c']}/>
      </div>
    );
  }
}

export default App;
