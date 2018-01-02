import React from 'react';

const InformationPage =(props) => {
  return (
    <div>
      <h1>Information Page</h1>
      <p>This is for id with {props.match.params.id}</p>
    </div>)
};

export default InformationPage;
