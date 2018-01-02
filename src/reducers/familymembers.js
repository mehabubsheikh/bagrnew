//Reducer function for managing family members of a member

const familyMemberReducerDefaultState =[];

export default (state=familyMemberReducerDefaultState,action) =>{
  switch(action.type){
    case 'ADD_FAMILY_MEMBER':
    return [
        ...state,
        action.familyMember
    ];
    case 'EDIT_FAMILY_MEMBER':
    return state.map((familyMember) =>{
      if(familyMember.id===action.id){
        return {
            ...familyMember,
            ...action.updates
        };
      }else {
        return familyMember;
      };
    });
    case 'REMOVE_FAMILY_MEMBER':
    return state.filter(({id}) =>(id !==action.id));
    default:
    return state;
  }
};
