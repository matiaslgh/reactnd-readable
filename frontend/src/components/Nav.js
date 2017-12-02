import React from 'react'

const Nav = props => {
  return (
    <nav>
      <ul className='categories'>
        {props.categories.map(cat => (
          <li className='category' key={cat}>{cat}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
