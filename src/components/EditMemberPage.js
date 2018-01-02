import React from 'react';
import { connect } from 'react-redux';
import AddMemberForm from './AddMemberForm';
import { editMember, removeMember } from './../actions/members';

const EditMemberPage = (props) =>(
  <div>
    <AddMemberForm
      member={props.member}
      onSubmit={(member) =>{
        props.dispatch(editMember(props.member.id,member));
        props.history.push('/');
      }}
    />
    <button
      onClick={() =>{
        props.dispatch(removeMember(props.member.id));
        props.history.push('/');
      }}
    >Remove</button>
  </div>
);

const mapStateToProps = (state,props) =>{
  return {
    member:state.members.find((member) =>(member.id ===props.match.params.id))
  };
}
export default connect(mapStateToProps)(EditMemberPage);
