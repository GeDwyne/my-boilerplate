import React from 'react';
import { withRouter } from 'react-router-dom';
import { EventsTable } from '../../Containers'


class Events extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
      return (
        <div>
            <EventsTable />
        </div>
      );
    }
}
  
export default withRouter(Events);