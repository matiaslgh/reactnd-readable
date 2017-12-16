import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../actions/commentsAction'
import Comment from './Comment'
import { Divider } from 'material-ui'

class Comments extends Component {

  componentDidMount() {
    this.props.getComments(this.props.postId)
  }

  render() {
    const { comments } = this.props
    return (
      <div className="comments">
        Comments
        <Divider light />
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ comments }) => ({
  comments
})

const mapDispatchToProps = dispatch => ({
  getComments: postId => dispatch(getComments(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
