//MemberReducer
const memberReducerDefaultState =[];
export default  (state=memberReducerDefaultState,action) =>{
  switch(action.type){
    case 'ADD_MEMBER':
    return [
          ...state,
          action.member
    ];
    case 'EDIT_MEMBER':
    return state.map((member) =>{
      if (member.id===action.id){
        return {
            ...member,
            ...action.updates
        };
      } else {
        return member;
      }
    });
    case 'REMOVE_MEMBER':
    return state.filter(({id}) =>(id !==action.id));
    default:
    return state;
  };
}
