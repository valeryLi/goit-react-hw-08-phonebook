import { NavLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

export const AuthNavigation = () => {
  return (
    <ul>
      <li>
        <Link as={NavLink} to="register" _activeLink={{ color: 'blue' }}>
          Sign up
        </Link>
      </li>
      <li>
        <Link as={NavLink} to="login" _activeLink={{ color: 'blue' }}>
          Login
        </Link>
      </li>
    </ul>
  );
};
