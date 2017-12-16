import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import capitalize from 'lodash.capitalize'
import { fetchCategories } from '../utils/api'
import { closeDrawer } from '../actions/uiAction'
import { setCategories } from '../actions/categoriesAction'
import { Link } from 'react-router-dom'
import { Drawer, IconButton, List, ListItem, ListItemText } from 'material-ui'
import { ChevronLeft as ChevronLeftIcon } from 'material-ui-icons'
import { withStyles } from 'material-ui/styles'

class CategoriesDrawer extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    categories: [{
      name: 'All',
      path: ''
    }]
  }

  componentDidMount() {
    fetchCategories().then(categories => {
      categories = categories.map( ({ name, path }) => ({
        name: capitalize(name),
        path
      }))
      this.props.setCategories(categories)
      this.setState({
        categories: [...this.state.categories, ...categories]
      })
    })
  }

  render() {
    const { closeDrawer, open, classes } = this.props
    const { categories } = this.state
    return (
      <Drawer
        type="persistent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
        open={open}
      >
        <div className={classes.drawerInner}>
          <div className="drawerHeader">
            <IconButton onClick={closeDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List className={classes.list}>
            {categories.map(cat => (
              <Link key={cat.path} to={`/${cat.path}`} style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemText primary={cat.name} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    )
  }
}

const styles = theme => ({
  drawerPaper: {
    position: 'fixed',
    height: '100%',
    width: 140
}})

const mapStateToProps = ({ ui, categories }) => ({
  open: ui.isDrawerOpen,
  categories: categories.allCategories
})

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
  setCategories: categories => dispatch(setCategories(categories))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CategoriesDrawer))
