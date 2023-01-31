import { NavLink } from 'react-router-dom';
import { Flex, Link, Text, List } from '@chakra-ui/react';

export const AuthNavigation = () => {
  return (
    <Flex>
      <List display={'flex'} flexDirection={'row'} gap={'20px'}>
        <li>
          <Link
            as={NavLink}
            to="register"
            _activeLink={{ color: '#7928CA', fill: '#7928CA' }}
            _hover={{ textDecoration: 'none' }}
          >
            <Text bgGradient="linear(to-l,#2563EB, #D946EF )" bgClip="text">
              {' '}
              Sign up
            </Text>
          </Link>
        </li>
        <li>
          <Link
            as={NavLink}
            to="login"
            _activeLink={{ color: 'blue' }}
            _hover={{ textDecoration: 'none' }}
          >
            <Text bgGradient="linear(to-l,#2563EB, #D946EF )" bgClip="text">
              {' '}
              Login
            </Text>
          </Link>
        </li>
      </List>
    </Flex>
  );
};
