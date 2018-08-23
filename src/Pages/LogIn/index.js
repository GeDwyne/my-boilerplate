import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../State/Actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  Redirect
} from 'react-router-dom';
class LogIn extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {};
    
        this.handleLogIn = this.handleLogIn.bind(this);
    }

    handleLogIn = () => {
      this.props.logIn();
      this.props.history.push('/');
    }

    render() {
        console.log("LOGIN PROPS: ", this.props);   
        return (
            <div onClick={this.handleLogIn}>
                LOG IN
            </div>
        );
    }
}


  const mapStateToProps = state => {
    const { logInStatus } = state;
    return { logInStatus };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logIn }, dispatch);
  }
  
  export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(LogIn));