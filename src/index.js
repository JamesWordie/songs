import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers'; // don't need /index as index works as a default

ReactDOM.render(
  // provider allows any child component to access the store
  <Provider store={createStore(reducers)} >
    <App />
  </Provider>,
  document.getElementById('root')

);
