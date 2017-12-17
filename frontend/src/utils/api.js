const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

const deleteElement = (type, id) =>
  fetch(`${api}/${type}/${id}`, { headers, method: 'DELETE' })

export const fetchCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPosts = category => {
  category = category.toLowerCase()
  const cat = category && category !== 'all' ? `/${category}` : ''
  return fetch(`${api}${cat}/posts`, { headers })
    .then(res => res.json())
    .then(posts => posts)
}

export const createPost = post =>
  fetch(`${api}/posts`, {
    headers,
    method: 'POST' ,
    body: JSON.stringify(post)
  })
  .then(data => data.json())

export const deletePost = id => deleteElement('posts', id)

export const getPost = id =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(data => data.json())

export const updatePost = (id, post) =>
fetch(`${api}/posts/${id}`, {
  headers,
  method: 'PUT' ,
  body: JSON.stringify(post)
})

export const apiPosts = { getPost, getPosts, createPost, deletePost, updatePost }

export const getComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
  .then(data => data.json())

export const addComment = comment =>
  fetch(`${api}/comments`, {
    headers,
    method: 'POST' ,
    body: JSON.stringify(comment)
  })
  .then(data => data.json())

export const deleteComment = id => deleteElement('comments', id)

export const updateComment = (id, body) =>
fetch(`${api}/comments/${id}`, {
  headers,
  method: 'PUT' ,
  body: JSON.stringify({body})
})

export const apiComments = { getComments, addComment, deleteComment, updateComment }
