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
import { connect } from 'react-redux';
import { selectEventSetUp } from '../../State/Actions';
import { DashboardTable } from '../../Components';
import { bindActionCreators } from 'redux';
import { db } from '../../Firebase/firebase.js';


const localStyles = theme => styles(theme);

class EventSetupControlPanel extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
                        userEventSetUps: [],
                        selectedEventSetUp: null,
                    };
                    
        this.handlEditFields = this.handleEditFields.bind(this);
        this.selectEventSetUp = this.selectEventSetUp.bind(this);
    }

    
    componentWillMount() {
        // let eventsList = [];
        let thisContext = this;
        const userId = this.props.logInStatus.userId.toString();
        db.collection("eventsetup").doc(userId)
            .get().then(function(doc) {
                let userEventSetUps = Object.values(doc.data()).map(eventSetup => {
                    return eventSetup
                });
                thisContext.setState({ userEventSetUps: userEventSetUps})
            });
    }
    
    handleEditFields = _.debounce((value) => {
        this.props.searchForTerm(value);
    }, 300);

    selectEventSetUp = (eventSetUp) => {
        this.props.selectEventSetUp(eventSetUp);
    }

    render() {
        
        const {classes, loginStatus, searchTerm, eventSetUp } = this.props;
        const { userEventSetUps } = this.state;

        console.log("ESID: ", eventSetUp);
        if (userEventSetUps.length > 0) {
            return (
                <div className={classes.root}>
                    <DashboardTable data={userEventSetUps} type='event setup' searchTerm={searchTerm} selectEventSetUp={this.selectEventSetUp}/>
                </div>
            );
        }
        else {
            return (
                <div className={classes.root}>
                    NONE
                </div>
            );
        }
    }
}

EventSetupControlPanel.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const { logInStatus, searchTerm, eventSetUp } = state;
    return { logInStatus, searchTerm, eventSetUp };
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectEventSetUp }, dispatch);
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(localStyles)(EventSetupControlPanel));
