import _ from 'lodash';
import React, { Component } from 'react';
import styles from "./styles/styles.js";
// import animation from './styles/animation.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
// import {
//   CSSTransition,
//   TransitionGroup,
// } from 'react-transition-group';
import { AccountCircle, Lock } from '@material-ui/icons';

const localStyles = (theme) => styles(theme);

class LogInCard extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
                        inputEmail: '',
                        inputEmailLabel: 'Username/Email',
                        inputPasswordLabel: 'Password',
                        inputPassword: '',
                        inputEmailError: false,
                        inputPasswordError: false
                    };

        this.validate = this.validate.bind(this);
    }

    validate = _.debounce((value, type) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
        if (type === 'email') {
            if (String(value) && !re.test(String(value).toLowerCase())) {
                this.setState({
                                inputEmailLabel: 'Invalid Email Address',
                                inputEmailError: true,
                                });
            }
            else {
                this.setState({
                                inputEmailLabel: 'Username/Email',
                                inputEmailError: false,
                                inputEmail: value
                            });

            }
        }
    }, 500)

    render() {
        
        const { classes, handleLogIn, logInLoading, logInMessage } = this.props;
        const { inputEmail, inputEmailLabel, inputEmailError, inputPassword, inputPasswordLabel, inputPasswordError } = this.state;

        function LogInControls() {
            if (logInLoading === true) {
                return (
                    <div className={classes.controls}>
                        <CircularProgress className={classes.progress} />
                    </div>
                )
            }
            else {
                return (
                    <div className={classes.controls}>
                        <Button color="secondary" className={classes.button}>
                            Register
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button} type="submit" onClick={() => handleLogIn(inputEmail, inputPassword)}>
                            LogIn
                        </Button>
                    </div>
                )
            }
        }

        return (
            <Grid item>
                <Card className={classes.card}>
                    <Grid container justify='space-between' alignItems="center">
                        <Grid item>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <form autoComplete="on">        
                                        <FormControl className={classes.margin}>
                                            <InputLabel htmlFor="username-input" error={inputEmailError}>{inputEmailLabel}</InputLabel>
                                            <Input
                                                type="email"
                                                id="username-input"
                                                onChange={(event) => this.validate(event.target.value, 'email')}
                                                error={inputEmailError}
                                                startAdornment={
                                                    <InputAdornment position="start" className={classes.inputAdornment}>
                                                        <AccountCircle />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>
                                            <InputLabel htmlFor="password-input">{inputPasswordLabel}</InputLabel>
                                            <Input
                                                type="password"
                                                id="password-input"
                                                onChange={(event) => this.setState({ inputPassword: event.target.value})}
                                                error={inputPasswordError}
                                                startAdornment={
                                                    <InputAdornment position="start" className={classes.inputAdornment}>
                                                        <Lock />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                        <Typography variant="caption" gutterBottom align="center">
                                            {logInMessage}
                                        </Typography>
                                        <LogInControls />
                                    </form>
                                </CardContent>
                            </div>
                        </Grid>
                        <Grid item>
                            <CardMedia
                                className={classes.cover}
                                image="http://marketline.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                                title="Profile Pic"
                            />
                        </Grid>
                    </Grid>
                </Card>   
            </Grid>
        );
    }
}

LogInCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
  
export default (withStyles(localStyles, { withTheme: true })(LogInCard));
