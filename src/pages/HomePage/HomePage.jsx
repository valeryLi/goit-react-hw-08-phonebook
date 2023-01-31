import { Box, Heading, Text } from '@chakra-ui/react';
const HomePage = () => {
  return (
    <Box px={3} py={2}>
      <Heading as={'h1'} size={'4xl'} color={'#F6BBEE'} mb={'10px'}>
        Hello!
      </Heading>
      <Text color={'#F6BBEE'} style={{ textTransform: 'uppercase' }}>
        {' '}
        And welcome to your personal phonebook
      </Text>
    </Box>
  );
};

export default HomePage;
