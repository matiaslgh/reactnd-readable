import React from 'react'
import PropTypes from 'prop-types'
import prettyDate from 'pretty-date'
import capitalize from 'lodash.capitalize'
import Vote from './Vote'
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import { Typography, Chip } from 'material-ui'

const Post = props => {
  const { post, className } = props
  const date = prettyDate.format(new Date(post.timestamp))
  return (
    <Card className={className} >
      <CardHeader
        // action={
        //   <IconButton>
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={post.title}
        subheader={`Created by ${post.author} - ${date}`}
      />
      <CardContent>
        <Typography component="p">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions disableActionSpacing>
        <Vote element={post}/>
        <Chip label={capitalize(post.category)} className="categoryChip" />
        Comments: {post.commentCount}
      </CardActions>
    </Card>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post
