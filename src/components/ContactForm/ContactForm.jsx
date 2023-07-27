import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, addContact } from '../../redux/contactsSlice';
import { StForm } from './ContactForm.styled';
import { StLabel } from './ContactForm.styled';
import { FieldName } from './ContactForm.styled';
import { FieldNumber } from './ContactForm.styled';
import { FormButton } from './ContactForm.styled';
import shortid from 'shortid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
      const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(name, number);
    // setName('');
    // setNumber('');
    const isDuplicateName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicateName) {
      alert(`${name} is already in contacts`);
      return;
    }
    const id = shortid.generate();
    dispatch(addContact({ id, name, number }));
    setName('');
    setNumber('');
  };
  return (
    <StForm autocpmplete="off" onSubmit={handleSubmit}>
      <StLabel htmlFor="name">
        Name
        <FieldName
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </StLabel>
      <StLabel htmlFor="user_tel">
        Number
        <FieldNumber
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </StLabel>

      <FormButton type="submit">
        Add contact
      </FormButton>
    </StForm>
  );
};

export default ContactForm;