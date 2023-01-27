import { Contact } from 'components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { selectFilter } from 'redux/filter/filter-selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { List } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <List
        listStyle={'none'}
        color={'pink'}
        display={'flex'}
        flexWrap={'wrap'}
        gap={'20px'}
        mb={'80px'}
        justifyContent="center"
      >
        {filtredContacts.map(({ name, number, id }) => {
          return <Contact key={id} id={id} name={name} number={number} />;
        })}
      </List>
    </>
  );
};
