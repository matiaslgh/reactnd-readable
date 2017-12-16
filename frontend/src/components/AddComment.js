import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v1'
import { addComment } from '../actions/commentsAction'
import { closeAddCommentModal } from '../actions/uiAction'
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog'
import { TextField, Button } from 'material-ui'
import { Slide } from 'material-ui/transitions'

const Transition = props => (<Slide direction="up" {...props} />)

class AddComment extends Component {

    constructor(props) {
      super(props)
      this.state = this.cleanState()
    }

    cleanState = () => ({
      author: '',
      body: '',
      authorError: false,
      bodyError: false,
    })

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
        [`${name}Error`]: !event.target.value
      })
    }

    isValid = () => {
      const { author, body } = this.state
      this.setState({
        authorError: !author,
        bodyError: !body,
      })
      return author && body
    }

    onRequestClose = () => {
      this.props.closeModal()
      this.setState(this.cleanState())
    }

    submit = () => {
      if (!this.isValid()) {
        return false
      }
      this.props.addComment({
        id: uuid(),
        timestamp: new Date().getTime(),
        parentId: this.props.parentId,
        ...this.state
      })
      this.onRequestClose()
      this.setState(this.cleanState())
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
          <DialogTitle>{"Add a comment"}</DialogTitle>
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

  const mapStateToProps = ({ ui }) => ({
    isModalOpen: ui.isAddCommentModalOpen
  })

  const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch(addComment(comment)),
    closeModal: () => dispatch(closeAddCommentModal())
  })

  export default connect(mapStateToProps, mapDispatchToProps)(AddComment)
