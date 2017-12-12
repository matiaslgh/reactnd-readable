const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

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

export const apiPosts = { getPosts, createPost }
