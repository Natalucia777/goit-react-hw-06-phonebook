import { getFilterValue } from '../../redux/filterSlice';
import { getContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { AddList } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  // if (!flContacts || flContacts.length === 0) {
  //   return <div>No such contact!</div>;
  // }
  const getFlContacts = (contacts, filter) => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };
  const flContacts = getFlContacts(contacts, filter);
  if (!flContacts || flContacts.length === 0) {
    return <div>No contacts found</div>;
  }
  return (
    <AddList>
      {flContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </AddList>
  );
};

export default ContactList;
