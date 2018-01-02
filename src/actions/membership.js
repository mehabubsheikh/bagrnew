//Action Generators for Membership Subscription of a members
import uuid from 'uuid';
//ADD_MEMBERSHIP
export const addMembershipInfo =(memberId,{
  membershipType='',
  startDate='',
  endDate=undefined,
  status=undefined
}={}) =>{
  return({
    type:'ADD_MEMBERSHIP_INFO',
    membershipInfo:{
      memberId,
      id:uuid(),
      membershipType,
      startDate,
      endDate,
      status
    }
  });
};
//EDIT_MEMBERSHIP
export const editMembershipInfo =(id,updates) =>{
  return ({
    type:'EDIT_MEMBERSHIP_INFO',
    id,
    updates
  });
};

//REMOVE_MEMBERSHIP
export const removeMembershipInfo =() =>{
  return({
    type:'REMOVE_MEMBERSHIP_INFO',
    id
  });
};
