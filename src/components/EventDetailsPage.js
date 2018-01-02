import React from 'react';

const EventDetailsPage =(props) => {
  return (
    <div>
      <h1>Portfolio Item</h1>
      <p>This is for id with {props.match.params.id}</p>
    </div>)
};

export default EventDetailsPage;
