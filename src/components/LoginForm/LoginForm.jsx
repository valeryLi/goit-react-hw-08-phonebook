import { Flex, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Flex
      as={'form'}
      flexDirection={'column'}
      border="1px"
      borderColor="pink"
      borderRadius="10px"
      mx={'auto'}
      mb={'200px'}
      p={'20px'}
      gap={'30px'}
      w={['260px', '400px', '450px', '480px']}
      onSubmit={handleSubmit}
    >
      <Flex flexDirection={'column'} align={'center'} gap={'20px'}>
        <FormControl isRequired>
          <FormLabel color="pink"> Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            color={'pink'}
            placeholder="Email address"
            onChange={handleChange}
          />
          <FormLabel color={'pink'}>Password</FormLabel>

          <Input
            type="password"
            name="password"
            value={password}
            color={'pink'}
            placeholder="Password"
            onChange={handleChange}
          />
        </FormControl>
      </Flex>
      <Button type="submit" colorScheme="pink" size="sm">
        Login
      </Button>
    </Flex>
  );
};
