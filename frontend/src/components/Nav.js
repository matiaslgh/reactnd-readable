import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategories } from '../actions/categoriesAction'
import CreatePost from './CreatePost'

class Nav extends Component {

  state = {
    createPostModalIsOpen: false
  }

  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <nav>
        <ul className='categories'>
          <li className='category'>
            <Link to='/'>All</Link>
          </li>
          {categories.map(cat => (
            <li className='category' key={cat.name}>
              <Link to={cat.path}>{cat.name}</Link>
            </li>
          ))}
        </ul>
        <button onClick={() => this.setState({createPostModalIsOpen: true})}>
            Create Post
        </button>
        <CreatePost
          isOpen={this.state.createPostModalIsOpen}
          onRequestClose={() => this.setState({createPostModalIsOpen: false})}
          categories={categories.map(c => ({ label:c.name, value:c.name }))}
        />
      </nav>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories())
})

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
