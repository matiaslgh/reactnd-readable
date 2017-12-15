import React from 'react'
import { Component } from 'react'
import Post from './Post'
import Comments from './Comments'
import { getPost } from '../utils/api'

class PostDetail extends Component {

  state = { }

  componentDidMount() {
    getPost(this.props.match.params.post_id)
      .then(post => this.setState({ post }))
  }

  render() {
    const { post } = this.state
    if (post) {
      return (
        <div className="postDetailContainer">
          <Post post={post} className="postDetail"/>
          <Comments postId={post.id} />
        </div>
      )
    } else {
      return (<h1>Loading... </h1>)
    }
  }
}

export default PostDetail
