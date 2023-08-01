import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from './ContactForm.styled';

const ContactForm = ({ addNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handelSubmit = event => {
    event.preventDefault();

    const parseIntNumber = Number.parseInt(number);

    addNewContact({
      name,
      number: parseIntNumber,
    });

    onResetForm();
  };

  const onResetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handelSubmit}>
      <label>
        <p>Enter your name</p>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <p>Enter your number</p>
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </Form>
  );
};

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};

export default ContactForm;
