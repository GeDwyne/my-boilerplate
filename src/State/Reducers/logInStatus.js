const logInStatus = (state = [], action) => {
    switch (action.type) {
    case 'LOG_IN':
        return {
            isLoggedIn: true,
            redirectToReferrer: true
        }
    case 'LOG_OUT':
        return {
            isLoggedIn: false,
            redirectToReferrer: false
        }
    default:
        return state;
    }
  }
  
  export default logInStatus