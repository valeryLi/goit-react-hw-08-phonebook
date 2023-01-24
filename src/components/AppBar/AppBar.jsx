import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Navigation } from 'components/Navigation/Navigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';

export const AppBar = () => {
  const token = useSelector(selectToken);

  return (
    <header>
      <Navigation />
      {token ? <UserAuthMenu /> : <AuthNavigation />}
    </header>
  );
};
