import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { sortPosts } from '../actions/postsAction'
import { Button, Menu } from 'material-ui';
import { MenuItem } from 'material-ui/Menu'

class Sort extends Component {

  state = {
    anchorEl: null,
    open: false,
  }

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  select = criteria => {
    this.props.sortPosts(criteria)
    this.handleRequestClose()
  }

  render() {
    return (
      <div className="sortMenu">
        <Button
          aria-owns={this.state.open ? 'simple-menu' : null}
          aria-haspopup="true"
          color="contrast"
          onClick={this.handleClick}
        >
          Sort by
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem
            selected={this.props.criteria === 'timestamp'}
            onClick={() => this.select('timestamp')}
          >
            Date
          </MenuItem>
          <MenuItem
            selected={this.props.criteria === 'voteScore'}
            onClick={() => this.select('voteScore')}
          >
            Score
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  criteria: posts.sortCriteria
})

const mapDispatchToProps = dispatch => ({
  sortPosts: criteria => dispatch(sortPosts(criteria))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
