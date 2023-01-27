import { Flex, Button, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Flex align={'center'} justify={'space-between'} gap={'40px'}>
      <Text>
        <span>{name}:</span> <span>{number}</span>
      </Text>
      <Button
        type="button"
        colorScheme="pink"
        size="xs"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </Button>
    </Flex>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
