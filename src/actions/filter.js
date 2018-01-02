
export const addFilterText = ({
  text
}={}) => {
  return ({
    type:'ADD_FILTER_TEXT',
    filter:{
      text
    }
  })
};

export const setFilterEntity =({filterEntity}) =>{
  return (
    {
      type:'SET_ENTITY_FILTER',
      filter:{
        filterEntity
      }
    }
  )
};
