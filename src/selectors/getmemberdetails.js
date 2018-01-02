//Functions for getting details of the member based

export default(
  members,
  contacts,
  addresses,
  text,
  filterEntity
) =>{
  const matchedMembers = members.filter((member) =>{
    const nameMatch =(!text)||member.firstName.toLowerCase().includes(text.toLowerCase()) ||
                      member.lastName.toLowerCase().includes(text.toLowerCase()) ||
                      member.middleName.toLowerCase().includes(text.toLowerCase());
    return  nameMatch;
  });

  const matchedContacts = contacts.filter((contact) =>{
    const contactMatch = (!text)||contact.homePhone.toLowerCase().includes(text.toLowerCase())||
      contact.officePhone.toLowerCase().includes(text.toLowerCase()) ||
      contact.emailAddress.toLowerCase().includes(text.toLowerCase());
      return contactMatch;
  });

  const matchedAddresses = addresses.filter((address) =>{
    const addressMatch = (!text)||address.addressLine1.toLowerCase().includes(text.toLowerCase()) ||
      address.addressLine2.toLowerCase().includes(text.toLowerCase()) ||
      address.city.toLowerCase().includes(text.toLowerCase()) ||
      address.zip.toLowerCase().includes(text.toLowerCase());

      return addressMatch;
  })

  return {
    matchedMembers,
    matchedContacts,
    matchedAddresses
  };
}
