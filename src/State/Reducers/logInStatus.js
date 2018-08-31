const logInStatus = (state = [], action) => {
    switch (action.type) {
    case 'LOG_IN':
        return {
            isLoggedIn: true,
            userId: action.userId,
            redirectToReferrer: true
        }
    case 'LOG_OUT':
        return {
            isLoggedIn: false,
            userId: null,
            redirectToReferrer: false
        }
    default:
        return state;
    }
  }
  
  export default logInStatus