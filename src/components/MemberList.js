import React from 'react';
import { connect } from 'react-redux';
import MemberListItem from './MemberListItem'
import ContactListItem from './ContactListItem';
import AddressListItem from './AddressListItem';
import selectMembers from './../selectors/getmemberdetails';

const MemberList = (props) =>(
  <div>
    {props.filter.filterEntity==='member' && <div>
    <h3>Members</h3>
    {props.members.map((member) =>{
      return(
        <MemberListItem key={member.id} {...member}/>
      )
    })}
  </div>}
    {
      props.filter.filterEntity==='contact' && <div><h3>Contacts</h3>
      {props.contacts.map((contact) =>{
        return(
            <ContactListItem key={contact.id} {...contact}/>
        )
      })}
    </div>}
    {
      props.filter.filterEntity==='address' && <div><h3>Addresses</h3>
      {
        props.addresses.map((address) =>{
          return (
            <AddressListItem key={address.id} {...address} />
          )
        })
      }
    </div>}
  </div>
);

const mapStateToProps =(state) =>{
  const matchedDetails = selectMembers(state.members,state.contacts,state.addresses,state.filter.text,state.filter.filterEntity);
  //console.log(matchedDetails);
  return {
    members:matchedDetails.matchedMembers,
    contacts:matchedDetails.matchedContacts,
    addresses:matchedDetails.matchedAddresses,
    filter:state.filter
  };
};
export default connect(mapStateToProps)(MemberList);
