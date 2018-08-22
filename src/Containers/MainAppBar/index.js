import React, { Component } from 'react';
import styles from "./styles/styles.js";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Menu,
    MenuItem,
    Typography,
    Toolbar,
    IconButton
} from '@material-ui/core';
import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons';
import { connect } from 'react-redux'
import { forceOpenSideNav, closeSideNav } from '../../State/Actions'
import { bindActionCreators } from 'redux';

class MainAppBar extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
                        anchorEl: null,
                        auth: true
                    };

        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSideNavToggle = this.handleSideNavToggle.bind(this);
    }

    
    handleMenu(event) {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose() {
        this.setState({ anchorEl: null });
    };
    
    handleSideNavToggle() {
        if (this.props.sideNavStatus.open)
            this.props.closeSideNav();
        else
            this.props.forceOpenSideNav();
    };


    render() {
        
        const {classes, title} = this.props;
        let { anchorEl, auth } = this.state;
        let open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon onClick={ this.handleSideNavToggle }/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {title}
                        </Typography>
                        { auth && (
                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                    >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MainAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    sideNavStatus: state.sideNavStatus
  })

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ forceOpenSideNav, closeSideNav }, dispatch);
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(MainAppBar));
