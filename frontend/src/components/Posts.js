import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/postsAction'
import { openCreatePostModal } from '../actions/uiAction'
import Post from './Post'
import CreatePost from './CreatePost'
import { Button } from 'material-ui'
import { Add as AddIcon } from 'material-ui-icons'

class Posts extends Component {

  componentDidMount() {
    this.props.getPosts(this.props.category)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      this.props.getPosts(nextProps.category)
    }
  }

  render() {
    const { posts, isDrawerOpen, openModal } = this.props
    const classes = "content content-left " + (isDrawerOpen ? "contentShift-left" : "")
    return (
      <main className={classes} >
        <ul>
          {posts.map(post => (
            <li key={post.id}><Post post={post} className="postContainer"/></li>
          ))}
        </ul>
        <Button fab color="primary" aria-label="add" className="buttonPosition"
          onClick={openModal}
        >
          <AddIcon />
        </Button>
        <CreatePost />
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: category => dispatch(getPosts(category)),
  openModal: () => dispatch(openCreatePostModal())
})

const mapStateToProps = ({ posts, ui, categories }, props) => ({
  isDrawerOpen: ui.isDrawerOpen,
  category: categories.currentCategory,
  posts
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
