import { Flex, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = e => {
    e.preventDefault();
    const passwordConfirm = e.target.elements.repeatPassword.value;
    if (password !== passwordConfirm) {
      alert('No correct password. Try again');
    }

    dispatch(register({ name, email, password }));

    e.target.reset();
    reset();
  };

  const reset = () => {
    setName('');
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
          <FormLabel color={'pink'}>Name</FormLabel>

          <Input
            type="text"
            name="name"
            value={name}
            color={'pink'}
            placeholder="Username"
            onChange={handleChange}
          />

          <FormLabel color={'pink'}>Email</FormLabel>

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
            color={'pink'}
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />

          <FormLabel color={'pink'}>Password</FormLabel>

          <Input
            type="password"
            name="repeatPassword"
            color={'pink'}
            onChange={handleChange}
            placeholder="Repeat password"
          />
        </FormControl>
      </Flex>
      <Button type="submit" colorScheme="pink" size="sm">
        Sign Up
      </Button>
    </Flex>
  );
};
