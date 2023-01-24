import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactList';

const ContactsPage = () => {
  return (
    <>
      <p>Add new contact:</p>
      <ContactForm />
      <ContactList />
    </>
  );
};

export default ContactsPage;
