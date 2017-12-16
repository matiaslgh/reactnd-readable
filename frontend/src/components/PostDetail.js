import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { openAddCommentModal } from '../actions/uiAction'
import Post from './Post'
import Comments from './Comments'
import AddComment from './AddComment'
import { getPost } from '../utils/api'
import { Button } from 'material-ui'

class PostDetail extends Component {

  state = { }

  componentDidMount() {
    getPost(this.props.match.params.post_id)
      .then(post => this.setState({ post }))
  }

  render() {
    const { openModal } = this.props
    const { post } = this.state
    if (post) {
      return (
        <div className="postDetailContainer">
          <Post post={post} className="postDetail"/>
          <div className="createCommentButtonContainer">
            <Button raised color="primary" onClick={openModal}>
              Add a comment
            </Button>
          </div>
          <AddComment parentId={post.id} />
          <Comments postId={post.id} />
        </div>
      )
    } else {
      return (<h1>Loading... </h1>)
    }
  }
}

const mapDispatchtoProps = dispatch => ({
  openModal: () => dispatch(openAddCommentModal())
})

export default connect(()=>({}), mapDispatchtoProps)(PostDetail)
