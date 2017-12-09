import React from 'react'
import PropTypes from 'prop-types'

const Post = props => {
  const { post } = props
  return (
    <div>
      {post.title}
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post
