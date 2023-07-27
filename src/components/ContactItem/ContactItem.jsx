import PropTypes from 'prop-types';
import { ListItem } from './ContactLItem.styled';
import { FormButton } from 'components/ContactForm/ContactForm.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

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