import { Component } from 'react';
import Container from 'components/Container/Container';
//styles
import './App.css';
//components
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

//helpers
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  deleteContact = contactId => {
    const state = this.state;
    const visibleContacts = state.contacts.filter(
      contact => contact.id !== contactId,
    );
    this.setState({ contacts: visibleContacts });
    return visibleContacts;
  };

  addNewContact = data => {
    const { name, number } = data;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    console.log('contact', contact);
    // this.setState({ contact });
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addNewContact} />

          <h2>Contacts</h2>
          <Filter />

          <ContactList contacts={contacts} deleteContact={this.deleteContact} />
        </Container>
      </div>
    );
  }
}

export default App;
