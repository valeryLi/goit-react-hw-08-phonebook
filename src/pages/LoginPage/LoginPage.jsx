import { Heading, Box, Text } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const LoginPage = () => {
  return (
    <Box
      w={['280px', '479px', '767px', '991px', '1200px']}
      pt={'50px'}
      mx={'auto'}
      textAlign={'center'}
    >
      <Heading color={'pink'} mb={'10px'}>
        Welcome back!
      </Heading>
      <Text color={'#F6BBEE'} mb={'30px'}>
        Please log into your account t continue
      </Text>
      <LoginForm />
    </Box>
  );
};
