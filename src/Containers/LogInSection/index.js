import React, { Component } from 'react';
import styles from "./styles/styles.js";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { logIn } from '../../State/Actions/index.js';
import { bindActionCreators } from 'redux';
import { Grid } from '@material-ui/core';
import { LogInCard } from '../../Components';

class LogInSection extends Component {
    
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

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container className={classes.gridContainer} justify='center' alignItems='center'>
                    <LogInCard handleLogIn={this.handleLogIn}/>
                </Grid>
            </div>
        );
    }
}

LogInSection.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    const { sideNavStatus, logInStatus } = state;
    return { sideNavStatus, logInStatus };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logIn }, dispatch);
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps)(withStyles(styles, { withTheme: true })(LogInSection));