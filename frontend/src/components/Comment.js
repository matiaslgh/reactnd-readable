import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment, changeCommentToUpdate } from '../actions/commentsAction'
import { openUpdateCommentModal } from '../actions/uiAction'
import prettyDate from 'pretty-date'
import Vote from './Vote'
import CardsMenu from './CardsMenu'
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import { Typography } from 'material-ui'

class Comment extends Component {
  render() {
    const { comment, deleteComment, openUpdateCommentModal } = this.props
    const date = prettyDate.format(new Date(comment.timestamp))
    return (
      <Card className="comment">
        <CardHeader
          action={
            <CardsMenu
              onRequestEdit={ () => openUpdateCommentModal(comment) }
              onRequestDelete={ () => deleteComment(comment.id) }
            />
          }
          subheader={`Created by ${comment.author} - ${date}`}
        />
        <CardContent>
          <Typography component="p">
            {comment.body}
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          <Vote element={comment}/>
        </CardActions>
      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deleteComment: id => dispatch(deleteComment(id)),
  openUpdateCommentModal: comment => {
    dispatch(changeCommentToUpdate(comment.id, comment.body))
    dispatch(openUpdateCommentModal())
  }
})

export default connect(()=>({}), mapDispatchToProps)(Comment)
