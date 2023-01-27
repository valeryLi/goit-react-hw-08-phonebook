import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box, Heading, Text } from '@chakra-ui/react';

export const RegisterPage = () => {
  return (
    <Box
      w={['280px', '479px', '767px', '991px', '1200px']}
      pt={'50px'}
      mx={'auto'}
      textAlign={'center'}
    >
      <Heading color={'pink'} mb={'10px'}>
        Create account
      </Heading>
      <Text color={'#F6BBEE'} mb={'30px'}>
        Sign up to add and see your personal contacts
      </Text>
      <RegisterForm />
    </Box>
  );
};
