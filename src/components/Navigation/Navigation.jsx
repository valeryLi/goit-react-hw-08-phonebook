import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';
import { Link } from '@chakra-ui/react';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <ul>
        <li>
          <Link as={NavLink} to="/" _activeLink={{ color: 'blue' }}>
            Home
          </Link>
        </li>
        {token && (
          <li>
            <Link as={NavLink} to="contacts" _activeLink={{ color: 'blue' }}>
              Contacts
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
