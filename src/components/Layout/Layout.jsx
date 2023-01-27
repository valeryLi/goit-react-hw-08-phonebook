import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { Outlet } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';

export const Layout = () => {
  const token = useSelector(selectToken);
  return (
    <Box bgGradient="linear(to-r, #302b63, #24243e )" w="100%" h="100vh">
      <Box as="header" px={2} py={2}>
        <Flex align="center" w={'100%'} justify="space-between">
          <Text color="white">Phonebook</Text>
          <Navigation />
          {token ? <UserAuthMenu /> : <AuthNavigation />}
        </Flex>
      </Box>
      <main>
        <Outlet />
      </main>
      <Box
        as={'footer'}
        bgGradient="linear(to-l,#2563EB, #D946EF )"
        bgClip="text"
        alignItems={'center'}
      >
        @2023 Phonebook. Created by valeryLi.
      </Box>
    </Box>
  );
};

// bgGradient = 'linear(to-l,#2563EB, #D946EF )';
