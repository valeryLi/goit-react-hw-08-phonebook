import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';
import { Flex, Link, Text, List } from '@chakra-ui/react';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <Flex w={'100%'} align={'center'} justify={'space-between'}>
        <List>
          <li>
            <Link as={NavLink} to="/" _activeLink={{ color: 'blue' }}>
              <Text bgGradient="linear(to-l,#2563EB, #D946EF )" bgClip="text">
                {' '}
                Home
              </Text>
            </Link>
          </li>
          {token && (
            <li>
              <Link as={NavLink} to="contacts" _activeLink={{ color: 'blue' }}>
                <Text bgGradient="linear(to-l,#2563EB, #D946EF )" bgClip="text">
                  {' '}
                  Contacts
                </Text>
              </Link>
            </li>
          )}
        </List>
      </Flex>
    </nav>
  );
};
