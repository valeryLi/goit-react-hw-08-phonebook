import { Box, Text, Flex } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactList';

const ContactsPage = () => {
  return (
    <Box
      w={['280px', '479px', '767px', '991px', '1200px']}
      pt={'50px'}
      mx={'auto'}
      textAlign={'center'}
    >
      <Text color={'pink'} mb={'20px'}>
        Add new contact:
      </Text>
      <ContactForm />
      <Flex justify={'center'} align={'center'} h={'400px'}>
        <ContactList />
      </Flex>
    </Box>
  );
};

export default ContactsPage;
