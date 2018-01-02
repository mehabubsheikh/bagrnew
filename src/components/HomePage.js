import React from 'react';
import MemberList from './MemberList';
import MemberListFilter from './MemberListFilter';
const HomePage =() => (
  <div>
  <h1>About Us</h1>
  <MemberListFilter/>
  <MemberList />
  <p> Bengali Association of Greater Rochester (BAGR) is a non-profit cultural organization located in Rochester,
    NY area celebrating Bengali culture and festivals. BAGR is an Association of its Members and its motto is to celebrate and
    promote the Bengali and Indian religious and associated culture within its community.</p>
  <p>This website uses graphics from varied sources. In some cases proper acknowledgement or permission may not have been obtained,
    as the source may be unknown. If any copyright violation has occurred - please inform the webmaster by e-mail. The graphics
    in question will be immediately removed</p>
  </div>

);

export default HomePage;
