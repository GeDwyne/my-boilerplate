let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
  })

  export const openSideNav = () => ({
    type: 'OPEN_SIDENAV'
})

export const closeSideNav = () => ({
    type: 'CLOSE_SIDENAV'
})

export const forceOpenSideNav = () => ({
  type: 'FORCE_OPEN_SIDENAV'
})

export const logIn = (userId) => ({
  type: 'LOG_IN',
  userId: userId
})

export const logOut = () => ({
  type: 'LOG_OUT'
})

export const updateEventsList = (eventsList, searchTerm) => ({
  type: 'UPDATE_EVENTS_LIST',
  eventsList: eventsList
})

export const clearEventsList = () => ({
  type: 'CLEAR_EVENTS_LIST',
  eventsList: null
})

export const searchForTerm = (term) => ({
  type: 'SEARCH_FOR_TERM',
  term: term
})

export const selectEventSetUp = (eventSetUp) => ({
  type: 'SELECT_EVENT_SETUP',
  eventSetUp: eventSetUp
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}