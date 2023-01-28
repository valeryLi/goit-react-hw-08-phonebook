import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
      borderColor={'#D53F8C'}
      borderRadius="10px"
      mx={'auto'}
      mb={'200px'}
      p={'20px'}
      gap={'30px'}
      bg={'rgb(250, 255, 255, 0.725)'}
      w={['260px', '400px', '450px', '480px']}
      onSubmit={handleSubmit}
    >
      <Flex flexDirection={'column'} align={'center'} gap={'20px'}>
        <FormControl isRequired>
          <FormLabel color={'#2C2E8A'}> Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            color={'#020226'}
            borderColor={'#D53F8C'}
            placeholder="Email address"
            onChange={handleChange}
          />
          <FormLabel color={'#2C2E8A'}>Password</FormLabel>
          <InputGroup>
            <Input
              name="password"
              value={password}
              type={show ? 'text' : 'password'}
              color={'#020226'}
              borderColor={'#D53F8C'}
              placeholder="Password"
              onChange={handleChange}
            />
            <InputRightElement>
              <Button
                h="1.55rem"
                bg={'transparent'}
                mr={'5px'}
                size="xs"
                onClick={handleClick}
              >
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Flex>
      <Button type="submit" colorScheme="pink" size="sm">
        Login
      </Button>
    </Flex>
  );
};
