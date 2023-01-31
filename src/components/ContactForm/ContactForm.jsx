import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { Flex, Button, FormLabel, Input, FormControl } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isExist = contacts.find(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      toast({
        description: `${name} is already in contacts`,
        status: 'error',
        position: 'top',
      });
      reset();
      return;
    }

    const contact = { name, number };
    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Flex
      as={'form'}
      flexDirection={'column'}
      border="1px"
      borderColor="pink"
      borderRadius="10px"
      mx={'auto'}
      mb={'50px'}
      p={'20px'}
      gap={'30px'}
      w={['260px', '400px', '450px', '480px']}
      onSubmit={handleSubmit}
    >
      <Flex flexDirection={'column'} align={'center'} gap={'20px'}>
        <FormControl>
          <FormLabel color={'pink'}>Name</FormLabel>

          <Input
            value={name}
            type="text"
            name="name"
            color={'pink'}
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />

          <FormLabel color={'pink'}> Number </FormLabel>

          <Input
            value={number}
            type="tel"
            name="number"
            color={'pink'}
            placeholder="Phone Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </FormControl>
      </Flex>
      <Button type="submit" colorScheme="pink" size="sm">
        Add contact
      </Button>
    </Flex>
  );
};
