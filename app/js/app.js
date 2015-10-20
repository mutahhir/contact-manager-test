import React from 'react';  // although it isn't being used, we need to import it first
import $ from 'jquery';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './store/configure-store';

const store = configureStore();

render((
  <Provider store={store}>
    <ReduxRouter />
  </Provider>
), $('.app')[0]);
