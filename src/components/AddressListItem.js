import React from 'react';

const AddressListItem =({
  addressType,
  addressLine1,
  addressLine2,
  city,
  state,
  zip,
  memberId
}) =>(
    <div>
      <h4>{addressType}</h4>
      <p>{addressLine1}</p>
      <p>{addressLine2}</p>
      <p>{city} {state} {zip}</p>
    </div>
);

export default AddressListItem;
