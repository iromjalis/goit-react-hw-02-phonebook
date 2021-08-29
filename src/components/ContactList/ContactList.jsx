import React from 'react';
// import PropTypes from 'prop-types';
import './ContactList.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="ContactListWrapper">
      <ol>
        {contacts.map(({ name, number, id }, i) => (
          <li key={i} className="ContactList_item">
            {name} {number}
            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
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
