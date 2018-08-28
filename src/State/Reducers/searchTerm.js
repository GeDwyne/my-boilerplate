const searchTerm = (state = '', action) => {
    let searchTerm = action.term;
    switch (action.type) {
    case 'SEARCH_FOR_TERM':
        return searchTerm ;
    default:
        return state;
    }
  }
  
  export default searchTerm