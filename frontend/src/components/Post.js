import React from 'react'
import { connect } from 'react-redux'
import {
  deletePost,
  changePostToUpdate,
  postUpVote,
  postDownVote
} from '../actions/postsAction'
import { openUpdatePostModal } from '../actions/uiAction'
import PropTypes from 'prop-types'
import prettyDate from 'pretty-date'
import capitalize from 'lodash.capitalize'
import Vote from './Vote'
import CardsMenu from './CardsMenu'
import { Link } from 'react-router-dom'
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import { Typography, Chip } from 'material-ui'


const Post = props => {
  const { post, className, deletePost, redirectOnDelete, openUpdatePostModal,
    postUpVote, postDownVote } = props
  const date = prettyDate.format(new Date(post.timestamp))
  return (
    <Card className={className} >
      <CardHeader
        action={
          <CardsMenu
            onRequestEdit={() => openUpdatePostModal(post)}
            onRequestDelete={()=>{
              deletePost(post.id)
              if (redirectOnDelete) {
                window.location.href = '/'
              }
            }}
          />
        }
        title={(
          <Link to={`/${post.category}/${post.id}`} className='postTitleLink'>
            {post.title}
          </Link>)}
        subheader={`Created by ${post.author} - ${date}`}
      />
      <CardContent>
        <Typography component="p">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions disableActionSpacing>
        <Vote
          element={post}
          onRequestUpVote={() => postUpVote(post.id, post.voteScore)}
          onRequestDownVote={() => postDownVote(post.id, post.voteScore)}
        />
        <Chip label={capitalize(post.category)} className="categoryChip" />
        Comments: {post.commentCount}
      </CardActions>
    </Card>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id)),
  postUpVote: (id, score) => dispatch(postUpVote(id, score)),
  postDownVote: (id, score) => dispatch(postDownVote(id, score)),
  openUpdatePostModal: (post) => {
    dispatch(changePostToUpdate({
      id: post.id,
      title: post.title,
      body: post.body
    }))
    dispatch(openUpdatePostModal())
  }
})

export default connect(()=>({}), mapDispatchToProps)(Post)
