const eventsList = (state = [], action) => {
    console.log(action);
    
    switch (action.type) {
    case 'UPDATE_EVENTS_LIST':
        let eventsList = action.eventsList.map( event => {
            return {
                id: event.id, 
                name: event.name,
                startDate: event.startDate.toDate().toString(),
                endDate: event.endDate.toDate().toString()
            }
        });
        return { type: 'events', data: eventsList };
    case 'CLEAR_EVENTS_LIST':
        return {};
    default:
        return state;
    }
  }
  
  export default eventsList