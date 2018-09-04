import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GamesPage from './components/GamesPage';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="ui container">
        <div className="ui three itme menu">
          <NavLink exact activeClassName="action" className="item" to="/">Home</NavLink>
          <NavLink exact activeClassName="action" className="item" to="/games">Games</NavLink>
          <NavLink activeClassName="active" className="item" to="/games/new">Add New Game</NavLink>
        </div>
        <Route exact path="/" component={ App } />
        <Route exact path="/games" component={ GamesPage } />
       </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
