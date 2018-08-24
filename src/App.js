import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { openSideNav, closeSideNav, logIn } from './State/Actions';
import { bindActionCreators } from 'redux';
import Base from './Base'
import { LogIn } from './Pages/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    const { title, logInStatus } = this.props;

    return (
      <div id="outer-container" className="App">
        <CssBaseline />
        <Switch>
          <Route exact path="/login" component={LogIn} />
          <Route path="/" render={
            (props) =>
              (logInStatus.isLoggedIn)? 
              (<Base title={title}/>) : 
              (
                <Redirect
                  to="/login"
                />
              )
          } />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const { sideNavStatus, logInStatus } = state;
  return { sideNavStatus, logInStatus };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openSideNav, closeSideNav, logIn }, dispatch);
}


export default withRouter(
connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
