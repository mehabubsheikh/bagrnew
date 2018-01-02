import uuid from 'uuid';

export const addContact = (
  memberId,
  {
    homePhone,
    officePhone,
    altName,
    emailAddress
  } ={}) =>{
  return {
    type:'ADD_CONTACT',
    contact:{
      id:uuid(),
      memberId,
      homePhone,
      officePhone,
      altName,
      emailAddress
    }
  }
};

export const editContatc =(id,updates) =>{
  return{
    type:'EDIT_CONTACT',
    id,
    updates
  }
};

export const deleteContact = (id) =>{
  return{
    type:'DELETE_CONTACT',
    id
  }
};
