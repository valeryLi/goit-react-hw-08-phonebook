import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';
import { AnimatedBg } from 'components/AnimatedBg/AnimatedBg';

export const Layout = () => {
  const token = useSelector(selectToken);
  const location = useLocation();
  return location.pathname !== '/login' ? (
    <Box w={'100%'} h={'100vh'} bgGradient="linear(to-r, #302b63, #24243e )">
      <Box as="header" px={3} py={3}>
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
        mt={'300px'}
      >
        <Text textAlign={'center'}>@2023 Phonebook. Created by valeryLi.</Text>
      </Box>
    </Box>
  ) : (
    <>
      <Box w={'100%'} h={'100vh'}>
        <Box
          as="header"
          px={3}
          py={3}
          bgGradient="linear(to-r, #302b63, #24243e )"
        >
          <Flex align="center" w={'100%'} justify="space-between">
            <Text color="white">Phonebook</Text>
            <Navigation />
            {token ? <UserAuthMenu /> : <AuthNavigation />}
          </Flex>
        </Box>
        <main>
          {location.pathname === '/login' && <AnimatedBg />}
          <Outlet />
        </main>
        <Box
          as={'footer'}
          bgGradient="linear(to-r, #302b63, #24243e )"
          color={'pink'}
          px={3}
          py={4}
          mt={'420px'}
        >
          <Text textAlign={'center'}>
            @2023 Phonebook. Created by valeryLi.
          </Text>
        </Box>
      </Box>
    </>
  );
};

// bgGradient = 'linear(to-l,#2563EB, #D946EF )';
