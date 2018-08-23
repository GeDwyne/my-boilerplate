import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import sideNavStatus from './sideNavStatus';
import logInStatus from './logInStatus';

export default combineReducers({
    todos,
    visibilityFilter,
    sideNavStatus,
    logInStatus
})