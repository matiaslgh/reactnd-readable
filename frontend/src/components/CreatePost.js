import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v1'
import { createPost } from '../actions/postsAction'
import { closeCreatePostModal } from '../actions/uiAction'
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import { Select, TextField, Button } from 'material-ui'
import { Slide } from 'material-ui/transitions'

const Transition = props => (<Slide direction="up" {...props} />)

class CreatePost extends Component {

  constructor(props) {
    super(props)
    this.state = this.cleanState()
  }

  cleanState = () => ({
    author: '',
    title: '',
    body: '',
    category: '',
    authorError: false,
    titleError: false,
    bodyError: false,
    categoryError: false
  })

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      [`${name}Error`]: !event.target.value
    })
  }

  isValid = () => {
    const { author, title, body, category } = this.state
    this.setState({
      authorError: !author,
      titleError: !title,
      bodyError: !body,
      categoryError: !category
    })
    return author && title && body && category
  }

  onRequestClose = () => {
    this.props.closeModal()
    this.setState(this.cleanState())
  }

  submit = () => {
    if (!this.isValid()) {
      return false
    }
    this.props.createPost({
      id: uuid(),
      timestamp: new Date().getTime(),
      ...this.state
    })
    this.onRequestClose()
    this.setState(this.cleanState())
  }

  render(){
    const { isModalOpen, categories } = this.props
    return (
      <Dialog
        open={isModalOpen}
        transition={Transition}
        keepMounted
        onRequestClose={this.onRequestClose}
      >
        <DialogTitle>{"Create a Post"}</DialogTitle>
        <DialogContent>
          <form className="formContainer" noValidate autoComplete="off">
            <TextField
              required
              error={this.state.authorError}
              id="author"
              label="Author"
              className="textField"
              value={this.state.author}
              onChange={this.handleChange('author')}
              margin="normal"
            />
            <TextField
              required
              error={this.state.titleError}
              id="title"
              label="Title"
              className="textField"
              value={this.state.title}
              onChange={this.handleChange('title')}
              margin="normal"
            />
            <FormControl className="textField" required error={this.state.categoryError}>
              <InputLabel htmlFor="category">Category</InputLabel>
              <Select
                value={this.state.category}
                onChange={this.handleChange('category')}
                input={<Input name="category" id="category" />}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category.toLowerCase()}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              required
              error={this.state.bodyError}
              id="body"
              label="Body"
              multiline
              rows="6"
              value={this.state.body}
              onChange={this.handleChange('body')}
              className="textField"
              margin="normal"
            />
            <Button raised color="primary" className="formButton" onClick={this.submit}>
              Create
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    )
  }
}

const mapStateToProps = ({ categories, ui }) => ({
  categories: categories.allCategories.map(c => c.name),
  isModalOpen: ui.isCreatePostModalOpen
})

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  closeModal: () => dispatch(closeCreatePostModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
