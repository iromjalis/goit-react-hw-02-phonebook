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
    filter: '',
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
    const { contacts } = this.state;
    const { name, number } = data;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.some(({ name }) => name === contact.name)) {
      alert(`Sorry, ${name} already exists`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  onFilter = filter => {
    console.log('filter', filter);
    this.setState({ filter });
  };
  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <div className="App">
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addNewContact} />

          <h2>Contacts</h2>
          <Filter filter={filter} onFilter={this.onFilter} />

          <ContactList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </Container>
      </div>
    );
  }
}

export default App;
