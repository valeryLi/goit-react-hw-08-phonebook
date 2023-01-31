import { Box, Text, Flex } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactList';
import { Filter } from 'Filter/Filter';

const ContactsPage = () => {
  return (
    <Box
      w={['280px', '479px', '767px', '991px', '1200px']}
      pt={'50px'}
      mx={'auto'}
      textAlign={'center'}
    >
      <Filter />
      <Text color={'pink'} mb={'20px'}>
        Add new contact:
      </Text>
      <ContactForm />
      <Flex justify={'center'} align={'center'} minH={'300px'}>
        <ContactList />
      </Flex>
    </Box>
  );
};

export default ContactsPage;
