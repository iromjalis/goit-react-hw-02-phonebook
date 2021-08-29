import React from 'react';
// import PropTypes from 'prop-types';
//import { Test } from './Contacts.styles';

const ContactList = ({ contacts }) => {
  return (
    <div className="ContactListWrapper">
      <ol>
        {contacts.map((contact, i) => (
          <li key={i}>
            {contact.name} {contact.number}
          </li>
        ))}
      </ol>
    </div>
  );
};

ContactList.propTypes = {
  // bla: PropTypes.string,
};

ContactList.defaultProps = {
  // bla: 'test',
};

export default ContactList;
