import React from 'react'
import { Component } from 'react'
import prettyDate from 'pretty-date'
import Vote from './Vote'
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import { Typography } from 'material-ui'

class Comment extends Component {
  render() {
    const { comment } = this.props
    const date = prettyDate.format(new Date(comment.timestamp))
    return (
      <Card className="comment">
        <CardHeader subheader={`Created by ${comment.author} - ${date}`} />
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

export default Comment
