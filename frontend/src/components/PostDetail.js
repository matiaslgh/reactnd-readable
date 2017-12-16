import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { openAddCommentModal } from '../actions/uiAction'
import Post from './Post'
import Comments from './Comments'
import AddComment from './AddComment'
import NotFound from './NotFound'
import { getPost } from '../utils/api'
import { Button } from 'material-ui'

class PostDetail extends Component {

  state = { }

  componentDidMount() {
    getPost(this.props.match.params.post_id)
      .then(post => this.setState({ post }))
  }

  render() {
    const { openModal, isDrawerOpen } = this.props
    const { post } = this.state
    const className = `postDetailContainer ${isDrawerOpen ? 'contentShift-left' : ''}`
    if (post) {
      if (post.error || !Object.keys(post).length) return (<NotFound />)
      return (
        <div className={className}>
          <Post post={post} className="postDetail" redirectOnDelete={true}/>
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

const mapStateToProps = ({ ui }) => ({
  isDrawerOpen: ui.isDrawerOpen
})

const mapDispatchtoProps = dispatch => ({
  openModal: () => dispatch(openAddCommentModal())
})

export default connect(mapStateToProps, mapDispatchtoProps)(PostDetail)
