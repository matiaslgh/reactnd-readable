import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/postsAction'
import Post from './Post'
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
    const { posts, open } = this.props
    const classes = "content content-left " + (open ? "contentShift-left" : "")
    return (
      <main className={classes} >
        <ul>
          {posts.map(post => (
            <li key={post.id}><Post post={post}/></li>
          ))}
        </ul>
        <Button fab color="primary" aria-label="add" className="buttonPosition">
          <AddIcon />
        </Button>
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: category => dispatch(getPosts(category))
})

const mapStateToProps = ({ posts, ui, category }, props) => ({
  open: ui.isDrawerOpen,
  posts,
  category
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
