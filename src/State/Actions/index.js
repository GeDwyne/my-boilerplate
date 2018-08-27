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

export const logIn = () => ({
  type: 'LOG_IN'
})

export const logOut = () => ({
  type: 'LOG_OUT'
})

export const updateEventsList = (eventsList) => ({
  type: 'UPDATE_EVENTS_LIST',
  eventsList: eventsList
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}