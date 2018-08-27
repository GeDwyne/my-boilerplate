import React from 'react';
import { withRouter } from 'react-router-dom';
import { LogInSection } from '../../Containers';

class LogIn extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { history } = this.props;
        
        return (
            <div style={{height: '100vh'}}>
                <LogInSection history={history} />
            </div>
        );
    }
}
  
  export default withRouter(LogIn);