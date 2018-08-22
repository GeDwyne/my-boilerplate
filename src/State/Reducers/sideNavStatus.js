const sideNavStatus = (state = [], action) => {
    switch (action.type) {
      case 'OPEN_SIDENAV':
        return {
            open: true,
            force: false
          }
      case 'CLOSE_SIDENAV':
        return {
            open: false,
            force: false
          }
      case 'FORCE_OPEN_SIDENAV':
        return {
            open: true,
            force: true
          }
      default:
        return {
          open: false
        }
    }
  }
  
  export default sideNavStatus