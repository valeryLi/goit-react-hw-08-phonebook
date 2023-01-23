import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactList';

export const ContactsPage = () => {
  return (
    <>
      <p>Add new contact:</p>
      <ContactForm />
      <ContactList />
    </>
  );
};
