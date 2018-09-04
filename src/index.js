import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="ui container">
        <div className="ui three itme menu">
          <NavLink className="item" to="/">Home</NavLink>
          <NavLink className="item" to="/">Games</NavLink>
          <NavLink className="item" to="/">Add New Game</NavLink>
        </div>
        <Route path="/" component={ App } />
        <Route path="/games" component={ App } />
       </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
