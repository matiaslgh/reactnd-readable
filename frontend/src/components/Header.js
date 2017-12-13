import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { openDrawer } from '../actions/uiAction'
import { AppBar, Typography, Toolbar, IconButton } from 'material-ui'
import { Menu as MenuIcon } from 'material-ui-icons'

class Header extends Component {

  render() {
    const { openDrawer, open, category } = this.props
    const appBarClasses = "appBar " + (open ? "appBarShift" : "")
    return (
      <AppBar className={appBarClasses} >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="contrast"
            aria-label="open drawer"
            onClick={openDrawer}
            className={ open && "hide" }
          >
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" noWrap>
            {category}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = ({ui, categories}) => ({
  open: ui.isDrawerOpen,
  category: categories.currentCategory
})

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openDrawer())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
