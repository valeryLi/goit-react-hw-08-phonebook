import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filter/filterSlice';
import { Flex, Input, Text } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Flex
      flexDirection={'column'}
      justify={'center'}
      alignItems={'center'}
      gap={'10px'}
    >
      <Text color={'pink'}>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        placeholder="Find contact"
        color={'pink'}
        mb={'10px'}
        w={['260px', '400px', '450px', '480px']}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={e => dispatch(setFilterValue(e.target.value))}
      />
    </Flex>
  );
};
