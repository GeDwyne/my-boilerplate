import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import sideNavStatus from './sideNavStatus';
import logInStatus from './logInStatus';
import eventsList from './eventsList';
import searchTerm from './searchTerm';
import eventSetUp from './eventSetup';

export default combineReducers({
    todos,
    visibilityFilter,
    sideNavStatus,
    logInStatus,
    eventsList,
    searchTerm,
    eventSetUp,
})