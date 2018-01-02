import uuid from 'uuid';

//ADD_ADDRESS
export const addAddress =(
  {memberId,
  addressType ='HOME',
  addressLine1='',
  addressLine2='',
  city='',
  state='',
  zip=''
} ={}) =>{
  return {
    type:'ADD_ADDRESS',
    address:{
      id:uuid(),
      memberId,
      addressType,
      addressLine1,
      addressLine2,
      city,
      state,
      zip
    }
  }
};
//EDIT_ADDRESS
export const editAddress = (id,updates) =>{
  retrun ({
    type:'EDIT_ADDRESS',
    id,
    updates,
  });
};
//REMOVE_ADDRESS
export const removeAddress =() =>{
  return({
    type:'REMOVE_ADDRESS',
    id
  });
};
