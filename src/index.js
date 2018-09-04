import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <div className="ui container">
      <div className="ui three itme menu">
        <a href="#" className="item">Home</a>
        <a href="#" className="item">Games</a>
        <a href="#" className="item">Add New Game</a>
      </div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
