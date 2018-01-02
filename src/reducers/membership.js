//Reducer function for managing membership details of a member
const membershipReducerDefaultState =[];

export default (state=membershipReducerDefaultState,action) => {
  switch(action.type){
    case 'ADD_MEMBERSHIP_INFO':
    return [
        ...state,
        action.membershipInfo
    ];
    case 'EDIT_MEMBERSHIP_INFO':
    return state.map((membershipInfo) =>{
      if(membershipInfo.id===action.id){
        return {
            ...membershipInfo,
            ...action.updates
        };
      }else {
        return membershipInfo;
      };
    });
    case 'REMOVE_MEMBERSHIP_INFO':
    return state.filter(({id}) => id !==action.id);
    default:
    return state;
  }
};
