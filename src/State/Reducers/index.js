import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import sideNavStatus from './sideNavStatus'

export default combineReducers({
    todos,
    visibilityFilter,
    sideNavStatus
})