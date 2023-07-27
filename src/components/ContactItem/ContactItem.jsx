import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { ListItem } from './ContactItem.styled';
import { FormButton } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();
  return (
    <>
      <ListItem key={contact.id}>
        {contact.name}: {contact.number}
        <FormButton onClick={() => {
            dispatch(deleteContact(contact.id));
          }} >
          Delete
        </FormButton>
      </ListItem>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;