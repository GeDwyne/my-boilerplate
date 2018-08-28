import _ from 'lodash';
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
import { connect } from 'react-redux';
import { forceOpenSideNav, closeSideNav, logOut, clearEventsList, searchForTerm } from '../../State/Actions';
import { SearchBar } from '../../Components';
import { bindActionCreators } from 'redux';


const localStyles = theme => styles(theme);

class MainAppBar extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
                        anchorEl: null,
                        auth: true
                    };

        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSideNavModeToggle = this.handleSideNavModeToggle.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    
    handleMenu(event) {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose() {
        this.setState({ anchorEl: null });
    };
    
    handleSideNavModeToggle() {
        if (this.props.sideNavStatus.open)
            this.props.closeSideNav();
        else
            this.props.forceOpenSideNav();
    };

    handleLogOut() {
        this.props.logOut();
        this.props.clearEventsList();
    }


    handleSearch = _.debounce((value) => {
        this.props.searchForTerm(value);
    }, 300)

    render() {
        
        const {classes, title} = this.props;
        let { anchorEl, auth } = this.state;
        let open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={ this.handleSideNavModeToggle }>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {title}
                        </Typography>
                        <SearchBar placeholder='Search for an Event...' handleSearch={this.handleSearch}/>
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
                                    <MenuItem onClick={this.handleLogOut}>Log Out</MenuItem>
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
    return bindActionCreators({ forceOpenSideNav, 
                                closeSideNav, 
                                logOut, 
                                clearEventsList,
                                searchForTerm }, dispatch);
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(localStyles)(MainAppBar));
