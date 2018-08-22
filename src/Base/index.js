import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SideNav from '../Containers/SideNav';
import MainAppBar from '../Containers/MainAppBar';
// import styles from './styles/styles'
import { connect } from 'react-redux'
import { openSideNav, closeSideNav } from '../State/Actions'
import { bindActionCreators } from 'redux';
import logo from './logo.svg';

const drawerWidth = 240;
const drawerHeight = 1000;

const styles = theme => ({
    root: {
      flexGrow: 0,
      height: 430,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      perspective: '1500px',
      height: '100%'
    },
    rootOpen: {
      flexGrow: 0,
      height: 430,
      zIndex: 1,
      position: 'relative',
      display: 'flex',
      perspective: '1500px',
      overflow: 'hidden',
      height: '100%'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
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
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      // padding: theme.spacing.unit * 3,
      textAlign: 'center',
      overflow: 'hidden',
      transform: 'translate3d(0, 0, 0) rotateY(0deg)',
      MozTransform: 'translate3d(0, 0, 0) rotateY(0deg)',
      transformStyle: 'preserve-3d',
      transition: 'all 0.5s',
    },
    contentOpen: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      // padding: theme.spacing.unit * 3,
      textAlign: 'center',
      transform: 'translate3d(100px, 0, -600px) rotateY(-20deg)',
      MozTransform: 'translate3d(100px, 0, -600px) rotateY(-20deg)',
      transformStyle: 'preserve-3d',
      transition: 'all 0.5s',
      overflow: ''
    },
    overlay: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0)',
      transition: 'all 0.5s',
      display: 'none'
    },
    overlayOpen: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      transition: 'all 0.5s',
      zIndex: 20
    }
  });

class Base extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {};
    
        // this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }

    render() {
        const { classes, theme, sideNavStatus  } = this.props;
      return (
        <div>
            <MainAppBar title="Dashboard With Redux and Some Awesome Pseudo-Material Stylings"/>
            <div className={(sideNavStatus.open && !sideNavStatus.force)? classes.rootOpen : classes.root}>
                <SideNav />
                {/* DEFINE ROUTES/PAGES HERE */}
                <div className={(sideNavStatus.open && !sideNavStatus.force)? classes.overlayOpen : classes.overlay}></div>
                <main className={(sideNavStatus.open && !sideNavStatus.force)? classes.contentOpen : classes.content}>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </main>
            </div>
        </div>
      );
    }
}


const mapStateToProps = state => ({
    sideNavStatus: state.sideNavStatus
  })
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ openSideNav, closeSideNav }, dispatch);
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Base));