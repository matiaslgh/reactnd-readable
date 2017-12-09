import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/postsAction'
import Post from './Post'

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
    const { posts } = this.props
    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}><Post post={post}/></li>
        ))}
      </ul>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: category => dispatch(getPosts(category))
})

const mapStateToProps = ({ posts }, props) => ({
  posts,
  category: props.match.params.category
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
