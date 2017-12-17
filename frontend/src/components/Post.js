import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postsAction'
import { openUpdatePostModal } from '../actions/uiAction'
import PropTypes from 'prop-types'
import prettyDate from 'pretty-date'
import capitalize from 'lodash.capitalize'
import Vote from './Vote'
import CardsMenu from './CardsMenu'
import EditPost from './EditPost'
import { Link } from 'react-router-dom'
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import { Typography, Chip } from 'material-ui'


const Post = props => {
  const { post, className, deletePost, redirectOnDelete, openUpdatePostModal } = props
  const date = prettyDate.format(new Date(post.timestamp))
  return (
    <div>
      <Card className={className} >
        <CardHeader
          action={
            <CardsMenu
              onRequestEdit={() => openUpdatePostModal()}
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
          <Vote element={post}/>
          <Chip label={capitalize(post.category)} className="categoryChip" />
          Comments: {post.commentCount}
        </CardActions>
      </Card>
      <EditPost id={post.id} title={post.title} body={post.body} />
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id)),
  openUpdatePostModal: () => dispatch(openUpdatePostModal())
})

export default connect(()=>({}), mapDispatchToProps)(Post)
