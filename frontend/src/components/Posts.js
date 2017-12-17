import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/postsAction'
import { openCreatePostModal } from '../actions/uiAction'
import capitalize from 'lodash.capitalize'
import Post from './Post'
import NotFound from './NotFound'
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
    const { posts, isDrawerOpen, openModal, categories, category } = this.props

    if ( (categories.length - 1) && !categories.includes(category)) {
      return (<NotFound />)
    }

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
  categories: ['All', ...categories.allCategories.map(c => capitalize(c.name))],
  posts: posts.all
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
