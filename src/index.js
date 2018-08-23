import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './State/Reducers'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}>
                    <Router>
                        <div>
                            <Route path="/" render={() => <App title="This title passed through routing!"/>}/>
                            {/* <App title="This title passed through routing!"/> */}
                        </div>
                    </Router>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
