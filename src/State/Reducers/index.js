import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import sideNavStatus from './sideNavStatus';
import logInStatus from './logInStatus';
import eventsList from './eventsList';

export default combineReducers({
    todos,
    visibilityFilter,
    sideNavStatus,
    logInStatus,
    eventsList
})