import { createStore, combineReducers} from 'redux';
import memberReducer from './../reducers/members';
import contactReducer from './../reducers/contacts';
import addressReducer from './../reducers/addresses';
import familyMemberReducer from './../reducers/familymembers';
import membershipInfoReducer from './../reducers/membership';
import getMemberDetails from './../selectors/getmemberdetails';
import filterReducer from './../reducers/filter';


export default () =>{
  const store = createStore(
      combineReducers({
        members:  memberReducer,
        contacts: contactReducer,
        addresses: addressReducer,
        familyMembers:familyMemberReducer,
        membershipInfo: membershipInfoReducer,
        filter:filterReducer,
      }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
