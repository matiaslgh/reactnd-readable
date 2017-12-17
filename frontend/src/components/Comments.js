import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { getComments, cleanComments } from '../actions/commentsAction'
import Comment from './Comment'
import EditComment from './EditComment'
import { Divider } from 'material-ui'

class Comments extends Component {

  componentDidMount() {
    this.props.getComments(this.props.postId)
  }

  componentWillUnmount() {
    this.props.cleanComments()
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
        <EditComment />
      </div>
    )
  }
}

const mapStateToProps = ({ comments }) => ({
  comments: comments.all
})

const mapDispatchToProps = dispatch => ({
  getComments: postId => dispatch(getComments(postId)),
  cleanComments: () => dispatch(cleanComments())
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
