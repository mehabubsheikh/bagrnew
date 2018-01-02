import React from 'react';
import { connect } from 'react-redux';
import { addFilterText, setFilterEntity } from './../actions/filter';

const MemberListFilter = (props) =>(
  <div>
    <input type='text' value={props.filter.text} onChange={(e) =>{
      props.dispatch(addFilterText({text:e.target.value}));
    }}/>
    <select value={props.filter.filterEntity} onChange={(e) =>{
      props.dispatch(setFilterEntity({
        filterEntity:e.target.value
      }))
    }}>
      <option value="member">Members</option>
      <option value="contact">Contacts</option>
      <option value="address">Addresses</option>
    </select>
  </div>
);
const mapStateToProps = (state) =>{
  return {
    filter:state.filter
  };
}
export default connect(mapStateToProps)(MemberListFilter);
