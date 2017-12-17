import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { updateComment } from '../actions/commentsAction'
import { closeUpdateCommentModal } from '../actions/uiAction'
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog'
import { TextField, Button } from 'material-ui'
import { Slide } from 'material-ui/transitions'

const Transition = props => (<Slide direction="up" {...props} />)

class EditComment extends Component {

  constructor(props) {
    super(props)
    this.state = this.cleanState()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      body: nextProps.comment.body
    })
  }

  cleanState = () => ({
    body: '',
    bodyError: false,
  })

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      [`${name}Error`]: !event.target.value
    })
  }

  isValid = () => {
    const { body } = this.state
    this.setState({
      bodyError: !body
    })
    return !!body
  }

  onRequestClose = () => {
    this.props.closeModal()
    this.setState(this.cleanState())
  }

  submit = () => {
    if (!this.isValid()) {
      return false
    }
    this.props.updateComment(
      this.props.comment.id,
      {body : this.state.body }
    )
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
        <DialogTitle>{"Edit the Comment"}</DialogTitle>
        <DialogContent>
          <form className="formContainer" noValidate autoComplete="off">
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

const mapStateToProps = ({ ui, comments }) => ({
  isModalOpen: ui.isUpdateCommentModalOpen,
  comment: comments.commentToUpdate
})

const mapDispatchToProps = dispatch => ({
  updateComment: (id,body) => dispatch(updateComment(id,body)),
  closeModal: () => dispatch(closeUpdateCommentModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditComment)
