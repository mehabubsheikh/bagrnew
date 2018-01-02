import React from 'react';

const ContactListItem = ({
  memberId,
  homePhone,
  officePhone,
  altName,
  emailAddress
}) =>(
  <div>
    <h4>{altName}</h4>
    <p>{homePhone}</p>
    <p>{officePhone}</p>
    <p>{emailAddress}</p>
    <p>{memberId}</p>
  </div>
);

export default ContactListItem;
