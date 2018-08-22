import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import { connect } from 'react-redux'
import { openSideNav, closeSideNav } from '../../State/Actions'
import { bindActionCreators } from 'redux';

const drawerWidth = 240;

const styles = theme => ({
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9,
      },
    },
  });

class SideNav extends React.Component {
    
    constructor(props) {
    super(props);
      this.state = {};

      this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
      this.handleDrawerClose = this.handleDrawerClose.bind(this);
    }

    handleDrawerOpen = () => {
      !this.props.sideNavStatus.force && this.props.openSideNav();
    };
  
    handleDrawerClose = () => {
      !this.props.sideNavStatus.force && this.props.closeSideNav();
    };

    render() {
      const { classes, theme, sideNavStatus  } = this.props;
      return (
        <div>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !sideNavStatus.open && classes.drawerPaperClose),
            }}
            onMouseEnter={this.handleDrawerOpen}
            onMouseLeave={this.handleDrawerClose}
            open={this.state.open}
          >
            <Divider />
            <List>{mailFolderListItems}</List>
            <Divider />
            <List>{otherMailFolderListItems}</List>
          </Drawer>
        </div>
      );
    }
}


SideNav.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  sideNavStatus: state.sideNavStatus
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openSideNav, closeSideNav }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(SideNav));