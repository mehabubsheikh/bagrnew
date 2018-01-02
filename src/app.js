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
console.log('Testing');
const memberOne = store.dispatch(addMember({
  firstName:'Mehabub',
  lastName:'Sheikh',
  profession:'IT Professional',
  dob:198080
}));

const memberTwo =store.dispatch(addMember({
  firstName:'Farhan',
  lastName:'Sheikh',
  profession:'Student',
  dob:198080000
}));

const newadd1 ={
  memberId:memberOne.member.id,
  addressType:'HOME',
  addressLine1:'6 Colonial Parkway Apt#1',
  addressLine2:'',
  city:'Pittsford',
  state:'NY',
  zip:'14534'
}
store.dispatch(addAddress({
  memberId:memberOne.member.id,
  addressType:'HOME',
  addressLine1:'6 Colonial Parkway Apt#1',
  addressLine2:'',
  city:'Pittsford',
  state:'NY',
  zip:'14534'
}));

const jsx = (
  <Provider store ={store}>
      <AppRouter />
  </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));
