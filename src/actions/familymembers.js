//Action Generators for Family members
import uuid from 'uuid';

//ADD_FAMILY_MEMBER
export const addFamilyMember =(memberId,{
  firstName='',
  lastName='',
  age=0,
  relationshipType='',
  contactNumber='',
  createdAt=0
}={}) =>{
  return ({
    type:'ADD_FAMILY_MEMBER',
    familyMember:{
      id:uuid(),
      memberId,
      firstName,
      lastName,
      age,
      relationshipType,
      contactNumber,
      createdAt
    }
  });
};
//EDIT_FAMILY_MEMBER
export const edtFamilyMember =(id,updates) =>{
  return({
    type:'EDIT_FAMILY_MEMBER',
    id,
    updates
  });
};
//REMOVE_FAMILY_MEMBER
export const removeFamilyMember =(id) =>{
  return({
    type:'REMOVE_FAMILY_MEMBER',
    id
  });
};
