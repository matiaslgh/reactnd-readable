import React from 'react'
import { Component } from 'react'
import Comment from './Comment'
import { getComments } from '../utils/api'
import { Divider } from 'material-ui'


class Comments extends Component {

  state = {
    comments: []
  }

  componentDidMount() {
    getComments(this.props.postId)
    .then(comments => this.setState({comments}))
  }

  render() {
    return (
      <div className="comments">
        Comments
        <Divider light />
        {this.state.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    )
  }
}

export default Comments
