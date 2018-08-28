import React, { Component } from 'react';
import styles from "./styles/styles.js";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    InputAdornment,
    FormControl,
    Input
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

const localStyles = (theme) => styles(theme);

class SearchBar extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
                        hover: false
                    };

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleFocus() {
        this.setState({hover: true});
    }

    handleBlur() {
        this.setState({hover: false});
    }

    render() {
        const { classes, placeholder, handleSearch } = this.props;
        const { hover } = this.state;

        return (
            <FormControl className={(hover)? classes.marginOpen : classes.margin}>
              <Input
                id="input-with-icon-adornment"
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={(event) => handleSearch(event.target.value)}
                disableUnderline={true}
                placeholder={placeholder}
                startAdornment={
                  <InputAdornment className={classes.searchIcon} position="start">
                    <Search />
                  </InputAdornment>
                }
              />
            </FormControl>
        );
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
  
export default (withStyles(localStyles, { withTheme: true })(SearchBar));
