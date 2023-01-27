import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';
import { Box, Text, Button, Flex } from '@chakra-ui/react';
export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <Box>
      <Flex justify={'space-between'} align={'center'}>
        <Text
          bgGradient="linear(to-l,#2563EB, #D946EF )"
          bgClip="text"
          mr={'20px'}
        >{`Welcome ${name}!`}</Text>
        <Button colorScheme="pink" size="xs" onClick={() => dispatch(logout())}>
          Logout
        </Button>
      </Flex>
    </Box>
  );
};
