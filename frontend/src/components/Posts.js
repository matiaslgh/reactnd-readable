import React from 'react'
import { Component } from 'react'

class Posts extends Component {

  constructor(props) {
    super(props)
    this.state.filter = props.match.params.category
  }

  state = {}

  render() {
    return (
      <div>{this.state.filter}</div>
    )
  }
}

export default Posts
