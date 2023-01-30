import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { Flex, Button, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { UpdateForm } from 'components/UpdateContactForm/UpdateContact';

export const Contact = ({ name, number, id }) => {
  const contacts = useSelector(selectContacts);
  const [contactToUpdate, setContactToUpdate] = useState(null);
  const dispatch = useDispatch();

  const showUpdateForm = contactId => {
    const contact = contacts.find(({ id }) => id === contactId);
    setContactToUpdate(contact);
  };

  const closeForm = () => {
    setContactToUpdate(null);
  };

  return (
    <Flex align={'center'} justify={'space-between'} gap={'60px'}>
      <Text>
        <span>{name}:</span> <span>{number}</span>
      </Text>
      <Button
        type="button"
        colorScheme="pink"
        size="xs"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </Button>
      <Button
        type="button"
        colorScheme="pink"
        size="xs"
        onClick={() => showUpdateForm(id)}
      >
        Update
      </Button>
      {contactToUpdate && contactToUpdate.id === id && (
        <UpdateForm contactToUpdate={contactToUpdate} closeForm={closeForm} />
      )}
    </Flex>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
