import React from 'react';
import {NavLink} from 'react-router-dom'

const CommitteePage =() => (
  <div>
  <h1>CommitteePage</h1>
  <NavLink to="/portfolio/1">Portfolio One</NavLink>
  <NavLink to="/portfolio/2">Portfolio two</NavLink>
  </div>
);

export default CommitteePage;
