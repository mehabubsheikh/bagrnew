//Reducer Function for managin contact data of the members
const contactReducerDefaultState =[]
export default (state=contactReducerDefaultState,action) =>{
  switch(action.type){
    case 'ADD_CONTACT':
    return [
           ...state,
           action.contact
    ];
    case 'EDIT_CONTACT':
    return state.map((contact) =>{
      if (contact.id ==action.id){
        return{
          ...contact,
          ...action.contact
        };
      }else {
        return contact;
      };
    });
    case 'REMOVE_CONTACT':
    return state.filter(({id}) =>(id !==action.id));
    default:
    return state;
  }
};
