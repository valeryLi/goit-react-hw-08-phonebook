import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Navigation } from 'components/Navigation/Navigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { Text } from '@chakra-ui/react';

export const AppBar = () => {
  const token = useSelector(selectToken);

  return (
    <header>
      <Text color="white">Phonebook</Text>
      <Navigation />
      {token ? <UserAuthMenu /> : <AuthNavigation />}
    </header>
  );
};
