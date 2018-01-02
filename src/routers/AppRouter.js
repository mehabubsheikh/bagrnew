import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './../components/HomePage';
import EventsPage from './../components/EventsPage';
import EventDetailsPage from './../components/EventDetailsPage';
import NewsPage from './../components/NewsPage';
import InformationPage from './../components/InformationPage';
import CommitteePage from './../components/CommitteePage';
import ContactPage from './../components/ContactPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';
import AddMemberPage from './../components/AddMemberPage';
import EditMemberPage from './../components/EditMemberPage';

const AppRouter =() =>(
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/info" component={InformationPage}/>
        <Route path="/events" component={EventsPage} exact={true}/>
        <Route path="/events/:id" component={EventDetailsPage}/>
        <Route path="/news" component={NewsPage}/>
        <Route path="/addmember" component={AddMemberPage} />
        <Route path="/member/:id" component={EditMemberPage} />
        <Route path="/committee" component={CommitteePage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route component ={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
