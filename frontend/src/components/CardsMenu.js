import React from 'react'
import { Component } from 'react'
import { Menu, IconButton } from 'material-ui'
import { MenuItem } from 'material-ui/Menu';
import { MoreVert as MoreVertIcon } from 'material-ui-icons'

class CardsMenu extends Component {

  state = {
    anchorEl: null,
    open: false
  }

  handleRequestClose = () => this.setState({ open: false })

  handleClick = (event) => this.setState({
    open: true, anchorEl: event.currentTarget
  })

  edit = () => {
    this.props.onRequestEdit()
    this.handleRequestClose()
  }

  delete = () => {
    this.props.onRequestDelete()
    this.handleRequestClose()
  }

  render() {
    const { open } = this.state
    return (
      <div>
        <IconButton
          aria-owns={open ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}>
            <MoreVertIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={open}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem onClick={this.edit}>Edit</MenuItem>
          <MenuItem onClick={this.delete}>Delete</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default CardsMenu
