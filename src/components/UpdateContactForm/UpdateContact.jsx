import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contacts-operations';
import { useState } from 'react';
import {
  FormLabel,
  Input,
  Button,
  Flex,
  FormControl,
  useToast,
} from '@chakra-ui/react';

export const UpdateForm = ({ closeForm, contactToUpdate }) => {
  const [name, setName] = useState(contactToUpdate.name);
  const [number, setNumber] = useState(contactToUpdate.number);
  const toast = useToast();
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      updateContact({
        ...contactToUpdate,
        name,
        number,
      })
    );
    closeForm();
  };

  return (
    <Flex as={'form'} onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel> Name</FormLabel>

        <Input
          type="text"
          name="name"
          value={name}
          size="sm"
          onChange={handleChange}
        />

        <FormLabel> Number</FormLabel>

        <Input
          type="text"
          name="number"
          value={number}
          size="sm"
          onChange={handleChange}
        />
      </FormControl>

      <Button
        colorScheme="pink"
        size="sm"
        type="submit"
        onClick={() =>
          toast({
            status: 'success',
            position: 'bottom-right',
            description: 'Your contact details has been updated',
          })
        }
      >
        Save
      </Button>
    </Flex>
  );
};
