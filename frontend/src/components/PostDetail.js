import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { openAddCommentModal } from '../actions/uiAction'
import { changePostToSee, cleanPostToSee } from '../actions/postsAction'
import Post from './Post'
import Comments from './Comments'
import AddComment from './AddComment'
import NotFound from './NotFound'
import { Button } from 'material-ui'

class PostDetail extends Component {

  componentDidMount() {
    this.props.changePostToSee(this.props.match.params.post_id)
  }

  componentWillUnmount() {
    this.props.cleanPostToSee()
  }

  render() {
    const { openModal, isDrawerOpen, post } = this.props
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

const mapStateToProps = ({ ui, posts }) => ({
  isDrawerOpen: ui.isDrawerOpen,
  post: posts.postToSee
})

const mapDispatchtoProps = dispatch => ({
  openModal: () => dispatch(openAddCommentModal()),
  changePostToSee: id => dispatch(changePostToSee(id)),
  cleanPostToSee: () => dispatch(cleanPostToSee())
})

export default connect(mapStateToProps, mapDispatchtoProps)(PostDetail)
