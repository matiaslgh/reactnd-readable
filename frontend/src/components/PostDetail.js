import React from 'react'
import { Component } from 'react'
import Post from './Post'
import { getPost } from '../utils/api'

class PostDetail extends Component {

  state = {
    post: false
  }

  componentDidMount() {
    getPost(this.props.match.params.post_id)
      .then(post => this.setState({ post }))
  }

  render() {
    const { post } = this.state
    if (post) {
      return (
        <Post post={post} className="postDetail"/>
      )
    } else {
      return (<h1>Loading... </h1>)
    }
  }
}

export default PostDetail
