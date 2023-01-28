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
      <Heading
        bgGradient="linear(to-r, #302b63, #24243e )"
        bgClip={'text'}
        // color={'#C14CAC'}
        mb={'10px'}
      >
        Welcome back!
      </Heading>
      <Text color={'#2C2E8A'} mb={'30px'}>
        Please log into your account to continue
      </Text>
      <LoginForm />
    </Box>
  );
};
