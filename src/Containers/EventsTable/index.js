import React, { Component } from 'react';
import styles from "./styles/styles.js";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { updateEventsList } from '../../State/Actions/index.js';
import { bindActionCreators } from 'redux';
import { CircularProgress } from '@material-ui/core';
import { DashboardTable } from '../../Components';
import { db } from '../../Firebase/firebase.js';

class EventsTable extends Component {
    
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount() {
        let eventsList = [];
        const { updateEventsList } = this.props;
        db.collection("events").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                eventsList.push(doc.data());
            });
            updateEventsList(eventsList);
        });
    }

    render() {
        const { classes, eventsList, searchTerm } = this.props;

        if (!eventsList.data) {
            return (
                <div className={classes.root}>
                    <CircularProgress className={classes.progress} color="secondary" />
                </div>
            );
        }
        else {
            return (
                <div className={classes.root}>
                    <DashboardTable data={eventsList.data} type={eventsList.type} searchTerm={searchTerm}/>
                </div>
            );
        }
    }
}

EventsTable.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    const { eventsList, searchTerm } = state;
    return { eventsList, searchTerm };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateEventsList }, dispatch);
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps)(withStyles(styles, { withTheme: true })(EventsTable));