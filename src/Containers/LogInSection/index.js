import React, { Component } from 'react';
import styles from "./styles/styles.js";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { logIn } from '../../State/Actions/index.js';
import { bindActionCreators } from 'redux';
import { Grid } from '@material-ui/core';
import { LogInCard } from '../../Components';
import { db } from '../../Firebase/firebase.js';

class LogInSection extends Component {
    
    constructor(props) {
        super(props);

        this.state = { 
                        logInMessage: '',
                        logInLoading: false
                     };

        this.handleLogIn = this.handleLogIn.bind(this);
    }

    handleLogIn = (email, inputPassword) => {
        const { logIn, history } = this.props;
        const newThis = this;

        this.setState({ logInLoading: true });

        if (!email) {
            newThis.setState({
                logInMessage: "Please provide valid Username/Email",
                logInLoading: false
            });
            return;
        }

        let unsubscribe = db.collection("users").doc(email)
            .onSnapshot(function(doc) {
                if (!doc.data()) {
                    newThis.setState({
                        logInMessage: "Username/Email doesn't exist",
                        logInLoading: false
                    });

                    unsubscribe();
                    return;
                }

                let password = doc.data().password;
                
                if (password === inputPassword) {
                    newThis.setState({ logInLoading: false });
                    logIn();
                    history.push('/');
                }
                else {
                    newThis.setState({
                        logInMessage: 'Invalid Password. Please try again.',
                        logInLoading: false
                    });
                }
                unsubscribe();
            });
    }

    render() {

        const { classes } = this.props;
        const { logInMessage, logInLoading } = this.state;

        return (
            <div className={classes.root}>
                <Grid container className={classes.gridContainer} justify='center' alignItems='center'>
                    <LogInCard 
                        handleLogIn={this.handleLogIn} 
                        logInLoading={logInLoading}
                        logInMessage={logInMessage}
                    />
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