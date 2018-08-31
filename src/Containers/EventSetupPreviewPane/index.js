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
let unsubscribe = null;

class EventSetupPreviewPane extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
                        name: ''
                    };
                    
        this.handlEditFields = this.handleEditFields.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (unsubscribe)
            unsubscribe();

        let thisContext = this;
        let eventSetUpToPreview = {};
        const userId = nextProps.logInStatus.userId.toString();
        const eventSetUpId = nextProps.eventSetUp.selected;

        unsubscribe = db.collection("eventsetup").doc(userId)
            .onSnapshot(function(doc) {
                Object.values(doc.data()).forEach(eventSetup => {
                    if (eventSetup.id === eventSetUpId)
                        eventSetUpToPreview = eventSetup;
                });
                thisContext.setState({ name: eventSetUpToPreview.name })
                console.log("TOPREV: ", eventSetUpToPreview);
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
        const { userEventSetUps, name } = this.state;
        
        return (
            <div className={classes.root}>
                <p>{name}</p>
            </div>
        )
    }
}

EventSetupPreviewPane.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const { logInStatus, eventSetUp } = state;
    return { logInStatus, eventSetUp };
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectEventSetUp }, dispatch);
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(localStyles)(EventSetupPreviewPane));
