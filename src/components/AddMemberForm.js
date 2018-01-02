import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class AddMemberForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      firstName:props.member?props.member.firstName:'',
      lastName:props.member?props.member.lastName:'',
      middleName:props.member?props.member.middleName:'',
      profession:props.member?props.member.profession:'',
      dob:props.member? moment(props.member.dob):moment(),
      createdAt:props.member ?moment(props.member.createdAt):moment(),
      calendarFocused:false,
      error:''
    };
  }
  onFirtsNameChange = (e) =>{
    const firstName = e.target.value;
    this.setState(() =>({ firstName }));
  };

  onMiddleNameChange = (e) =>{
    const middleName = e.target.value;
    this.setState(() =>({ middleName }));
  };

  onLastNameChange = (e) =>{
    const lastName = e.target.value;
    this.setState(() =>({ lastName }));
  };

  onDobChange = (e) =>{
    const dob = e.target.value;
    this.setState(() =>({ dob }));
  };

  onProfessionChange = (e) =>{
    const profession = e.target.value;
    this.setState(() =>({ profession }));
  };
  onDateChange =(dob) =>{
    if (dob){
      this.setSate(() =>({ dob }));
    }
  };
  onFocusChange = ({ focused }) => {
      this.setState(() => ({ calenderFocused: focused }));
    };
    onFormSubmit =(e) =>{
      e.preventDefault();
      if(!this.state.firstName || !this.state.lastName|| !this.state.profession){
        this.setState(() =>({error:`Please enter value for First Name Last Name and Profession`}));
      } else {
        this.setState(() =>({error:''}))
        this.props.onSubmit({
          firstName: this.state.firstName,
          lastName:this.state.lastName,
          middleName:this.state.middleName,
          profession:this.state.profession,
          createdAt:this.state.createdAt.valueOf(),
          dob:this.state.dob.valueOf()
        })
      }
    }
  render(){
    return(
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="First Name"
            autoFocus
            value={this.state.firstName}
            onChange={this.onFirtsNameChange}
          />
          <input
            type="text"
            placeholder="Middle Name"
            value={this.state.middleName}
            onChange={this.onMiddleNameChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.onLastNameChange}
          />
          <input
            type="text"
            placeholder="Profession"
            value={this.state.profession}
            onChange={this.onProfessionChange}
          />
          <SingleDatePicker
            date={this.state.dob} // momentPropTypes.momentObj or null
            onDateChange={dob => this.setState({ dob })} // PropTypes.func.isRequired
            focused={this.state.calenderFocused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ calenderFocused:focused })} // PropTypes.func.isRequired
            numberOfMonths={1}
            isOutsideRange={() =>false}
            transitionDuration={10}
          />
          <button>
            Add Member
          </button>
        </form>
      </div>
    );
  };
};
