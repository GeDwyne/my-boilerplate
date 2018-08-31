import React from 'react';
import logo from './logo.svg';
import { withRouter } from 'react-router-dom';
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    FormControl,
    Input,
    InputLabel,
    InputAdornment,
    Button,
    CircularProgress,
    Typography
} from '@material-ui/core';
import { EventSetupControlPanel, EventSetupPreviewPane } from '../../Containers';


class EventSetup extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
      return (
        <Grid container>
        <Grid item md={8}>
            <EventSetupControlPanel />
        </Grid>
        <Grid item md={4}>
            {/* <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React Part 2</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div> */}
            <EventSetupPreviewPane />
        </Grid>
        </Grid>
      );
    }
}
  
export default withRouter(EventSetup);