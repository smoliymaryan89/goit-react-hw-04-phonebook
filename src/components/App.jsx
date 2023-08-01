import { useState } from 'react';
import { nanoid } from 'nanoid';
import useLocalStorage from 'hooks/useLocalStorage';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addNewContact = data => {
    if (isDuplicate(data.name))
      return alert(`${data.name} is already in contacts.`);

    if (!Number.isInteger(data.number)) {
      return alert('Enter a number!');
    }

    const newContact = {
      id: nanoid(),
      ...data,
    };

    setContacts(prev => [...prev, newContact]);
  };

  const onChangeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const isDuplicate = name => contacts.find(contact => contact.name === name);

  const onDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={onChangeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
};

export default App;
