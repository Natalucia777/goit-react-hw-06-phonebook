import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { TitleContacts } from './App.styled';

function App() {
  return (
    <div>
      <h1>
        Phonebook
      </h1>
      <ContactForm />
      <TitleContacts>
        Contacts
      </TitleContacts>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;