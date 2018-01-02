import React from 'react';
import {NavLink} from 'react-router-dom'

const EventsPage =() => (
  <div>
  <h1>Events</h1>
  <NavLink to="/portfolio/1">Portfolio One</NavLink>
  <NavLink to="/portfolio/2">Portfolio two</NavLink>
  </div>
);

export default EventsPage;
