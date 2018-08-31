const eventSetUp = (state = [], action) => {
    switch (action.type) {
    case 'SELECT_EVENT_SETUP':
        let eventSetUp = action.eventSetUp
        return { type: 'events', selected: eventSetUp };
    default:
        return state;
    }
  }
  
  export default eventSetUp;