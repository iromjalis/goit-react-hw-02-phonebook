import { Component } from 'react';
import Container from 'components/Container/Container';
//styles
import './App.css';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
//components

//file

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  deleteContact = contactId => {
    const state = this.state;
    const visibleContacts = state.contacts.filter(
      contact => contact.id !== contactId,
    );
    this.setState({ contacts: visibleContacts });
    return visibleContacts;
  };
  render() {
    const { contacts, name, number } = this.state;
    return (
      <div className="App">
        <Container>
          <h1>Phonebook</h1>
          <ContactForm name={name} number={number} />

          <h2>Contacts</h2>
          <Filter />

          <ContactList contacts={contacts} deleteContact={this.deleteContact} />
        </Container>
      </div>
    );
  }
}

export default App;
