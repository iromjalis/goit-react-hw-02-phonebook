import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ContactForm.css';

class ContactForm extends Component {
  render() {
    return (
      <div className="ContactFormWrapper">
        <form>
          <p>
            <label htmlFor="">
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
              />
            </label>
          </p>
          <p>
            <label htmlFor="">
              Phone
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
              />
            </label>
          </p>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  // bla: PropTypes.string,
};

ContactForm.defaultProps = {
  // bla: 'test',
};

export default ContactForm;
