import { Component } from 'react';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
//styles
import './App.css';
import Contacts from 'components/ContactList/ContactList';
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

  render() {
    const { contacts, name, number } = this.state;
    return (
      <div className="App">
        <Container>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />

          <Section title="Contacts">
            <Contacts contacts={contacts} />
          </Section>
        </Container>
      </div>
    );
  }
}

export default App;
