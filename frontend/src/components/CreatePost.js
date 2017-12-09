import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import { Form, Text, TextArea, Select } from 'react-form'
import uuid from 'uuid/v1'
import { createPost } from '../actions/postsAction'

class CreatePost extends Component {

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
  }

  render(){
    const { isOpen, onRequestClose, categories, createPost } = this.props
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        ariaHideApp={false}
      >
        <h1> Create a Post </h1>
        <Form onSubmit={submitted => {
          const post = {
            id: uuid(),
            timestamp: new Date().getTime(),
            author: submitted.author,
            title: submitted.title,
            body: submitted.body,
            category: submitted.category
          }
          createPost(post)
          onRequestClose()
        }}>
          { formApi => (
            <form onSubmit={formApi.submitForm}>
              <p>
                <label htmlFor="author">Author</label>
                <Text field="author" id="author" required />
              </p>
              <p>
                <label htmlFor="title">Title</label>
                <Text field="title" id="title" required />
              </p>
              <p>
                <label htmlFor="body">Body</label>
                <TextArea field="body" id="body" required />
              </p>
              <p>
                <label htmlFor="category">Category</label>
                <Select field="category" id="category" options={categories} required />
              </p>
              <button type="submit">Submit</button>
            </form>
          )}
        </Form>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
})

export default connect(()=>({}), mapDispatchToProps)(CreatePost)
