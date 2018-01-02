import React from 'react';
import { NavLink } from 'react-router-dom';
import APP_CONFIG from './../appconfig/config';

const Header =() =>(
  <header>
    <h1>{APP_CONFIG.pageTitle}</h1>
    <NavLink
        to="/"
        activeClassName="is-active"
        exact={true}
    >Home
    </NavLink>
    <NavLink
        to="/info"
        activeClassName="is-active"
        exact={true}
    >Info
    </NavLink>
    <NavLink
        to="/events"
        activeClassName="is-active"
        exact={true}
    >Events
    </NavLink>
    <NavLink
        to="/news"
        activeClassName="is-active"
    >News
    </NavLink>
    <NavLink
        to="/addmember"
        activeClassName="is-active"
    >Add Member
    </NavLink>
    <NavLink
        to="/committee"
        activeClassName="is-active"
    >Committee
    </NavLink>
    <NavLink
        to="/contact"
        activeClassName="is-active"
    >Contact
    </NavLink>
  </header>
);
export default Header;
