import React from 'react'

const Post = props => {
  const { post } = props
  return (
    <div>
      {post.title}
    </div>
  )
}

export default Post
