import { getFilterValue } from '../../redux/filterSlice';
import { getContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
// import { deleteContact } from '../../redux/contactsSlice';
// import { useDispatch } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { AddList } from './ContactList.styled';
// import { Record } from './ContactList.styled';
// import { ContactUser } from './ContactList.styled';
// import PropTypes from 'prop-types';

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
  //  flContacts.map(contact => (
  //       <Record key={contact.id}>
  //             <ContactUser>
  //           {contact.name} - {contact.number}
  //         </ContactUser>
  //         <button onClick={() => onDelete(contact.id)}>
  //           Delete
  //         </button>
  //       </Record>
  //     ))
  
  return (
    <AddList>
      {flContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </AddList>
  );
};
// ContactList.propTypes = {
//   flContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })),
//   onDelete: PropTypes.func.isRequired,
// };
export default ContactList;