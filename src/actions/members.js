import uuid from 'uuid';
//Action Generator for Adding Members to
export const addMember = ({firstName,lastName,middleName='',dob=0,profession=''}={}) =>{
  return (
    {
      type:'ADD_MEMBER',
      member:{
        id:uuid(),
        firstName,
        lastName,
        middleName,
        dob,
        profession,
        createdAt:0
      }
    }
  );
};
//Action Generator for Edit/Update Members
export const editMember =(id,updates) =>{
  return(
    {
      type:'EDIT_MEMBER',
      id,
      updates
    }
  )
};
//Action Generator for Deleting members
export const removeMember =(id) =>{
  return{
    type:'REMOVE_MEMBER',
    id
  }
};
