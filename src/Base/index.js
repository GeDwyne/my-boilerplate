import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SideNav, MainAppBar } from '../Containers';
import styles from './styles/styles'
import { connect } from 'react-redux';
import { openSideNav, closeSideNav } from '../State/Actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Events,EventSetup } from '../Pages';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

const localStyles = (theme) => styles(theme);

class Base extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
          redirectToReferrer: false
        };
    
    }

    render() {
      const { classes,  sideNavStatus, title  } = this.props;

      return (
        <div>
          <div>
              <MainAppBar title={title}/>
              <div className={(sideNavStatus.open && !sideNavStatus.force)? classes.rootOpen : classes.root}>
                  <SideNav />
                  <div className={(sideNavStatus.open && !sideNavStatus.force)? classes.overlayOpen : classes.overlay}></div>
                  <main className={(sideNavStatus.open && !sideNavStatus.force)? classes.contentOpen : classes.content}>
                    <Switch>
                      <Route exact path="/events" component={Events}/>
                      <Route exact path="/eventsetup" component={EventSetup}/>
                      <Redirect from="/" to="/events" />
                    </Switch>
                  </main>
              </div>
          </div>
        </div>
      );
    }
}


  const mapStateToProps = state => {
    const { sideNavStatus } = state;
    return { sideNavStatus };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ openSideNav, closeSideNav }, dispatch);
  }
  
  
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(localStyles, {withTheme: true})(Base)));