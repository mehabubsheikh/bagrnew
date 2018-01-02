import React from 'react';
import { Link } from 'react-router-dom';
const MemberListItem = ({firstName,lastName,profession,id}) => (
  <div>
    <Link to={`/member/${id}`}>
      <h3>{firstName} {lastName}</h3>
    </Link>
    <p>{id}</p>
    <p>{profession}</p>
  </div>
);

export default MemberListItem;
