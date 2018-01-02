const filterReducerDefaultState={};

export default (state=filterReducerDefaultState,action) =>{
  switch(action.type){
    case 'ADD_FILTER_TEXT':
    return {
        ...state,
        ...action.filter
    };
    case 'SET_ENTITY_FILTER':
    return {
      ...state,
      ...action.filter
    }
    default:
    return state;
  }
}
