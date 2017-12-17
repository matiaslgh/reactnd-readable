import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { updatePost } from '../actions/postsAction'
import { closeUpdatePostModal } from '../actions/uiAction'
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog'
import { TextField, Button } from 'material-ui'
import { Slide } from 'material-ui/transitions'

const Transition = props => (<Slide direction="up" {...props} />)

class EditPost extends Component {

  constructor(props) {
    super(props)
    this.state = this.cleanState()
  }

  cleanState = () => ({
    title: this.props.title,
    body: this.props.body,
    titleError: false,
    bodyError: false,
  })

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      [`${name}Error`]: !event.target.value
    })
  }

  isValid = () => {
    const { title, body } = this.state
    this.setState({
      titleError: !title,
      bodyError: !body
    })
    return title && body
  }

  onRequestClose = () => {
    this.props.closeModal()
    this.setState(this.cleanState())
  }

  submit = () => {
    if (!this.isValid()) {
      return false
    }
    this.props.updatePost(this.props.id, {
      title: this.state.title,
      body: this.state.body
    })
    this.onRequestClose()
  }

  render(){
    const { isModalOpen } = this.props
    return (
      <Dialog
        open={isModalOpen}
        transition={Transition}
        keepMounted
        onRequestClose={this.onRequestClose}
      >
        <DialogTitle>{"Edit the Post"}</DialogTitle>
        <DialogContent>
          <form className="formContainer" noValidate autoComplete="off">
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
              Update
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    )
  }
}

const mapStateToProps = ({ ui }) => ({
  isModalOpen: ui.isUpdatePostModalOpen
})

const mapDispatchToProps = dispatch => ({
  updatePost: (id,post) => dispatch(updatePost(id,post)),
  closeModal: () => dispatch(closeUpdatePostModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
