import 'babel-polyfill';  //Transphiles some stuff babel cannot do
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router'; // HTML 5 push state
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import './styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();  // could pass initial state
store.dispatch(loadCourses());
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
