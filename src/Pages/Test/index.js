import React, { Component } from 'react';
import logo from './logo.svg';
import { withRouter } from 'react-router-dom';


class Test extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
      return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
      );
    }
}
  
export default withRouter(Test);