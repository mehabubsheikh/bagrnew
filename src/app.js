import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configstore';
import { addMember, editMember, removeMember } from './actions/members';
import { addAddress, editAddress, removeAddress } from './actions/addresses';
import { addFilterText } from './actions/filter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import APP_CONFIG from './appconfig/config';

const store = configureStore();
// store.subscribe(() =>{
//   console.log(store.getState());
// });

const jsx = (
  <Provider store ={store}>
      <AppRouter />
  </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));
