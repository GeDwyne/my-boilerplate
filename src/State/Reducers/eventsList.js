const eventsList = (state = [], action) => {
    console.log(action);
    switch (action.type) {
    case 'UPDATE_EVENTS_LIST':
        return action.eventsList;
    default:
        return state;
    }
  }
  
  export default eventsList