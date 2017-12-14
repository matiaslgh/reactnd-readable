import React from 'react'
import PropTypes from 'prop-types'
import prettyDate from 'pretty-date'
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import { IconButton, Typography } from 'material-ui'
import { ArrowDropUp, ArrowDropDown } from 'material-ui-icons'

const Post = props => {
  const { post } = props
  return (
    <Card className="postContainer" >
          <CardHeader
            // action={
            //   <IconButton>
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={post.title}
            subheader={prettyDate.format(new Date(post.timestamp))}
          />
          <CardContent>
            <Typography component="p">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Vote positive">
              <ArrowDropUp />
            </IconButton>
            {post.voteScore}
            <IconButton aria-label="Vote negative">
              <ArrowDropDown />
            </IconButton>
          </CardActions>
        </Card>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post
