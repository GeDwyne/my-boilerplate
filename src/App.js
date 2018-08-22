import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Base from './Base'

class App extends Component {
  render() {
    return (
      <div id="outer-container" className="App">
        <CssBaseline />
        <Base />
      </div>
    );
  }
}

export default App;
