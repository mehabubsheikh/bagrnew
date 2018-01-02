import React from 'react';
import { connect } from 'react-redux';
import { addMember} from './../actions/members';
import AddMemberForm from './AddMemberForm';

const AddMemberPage = (props) =>(
  <div>
    <h1>Add Member</h1>
    <AddMemberForm
      onSubmit={(member) =>{
        props.dispatch(addMember(member));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddMemberPage);
