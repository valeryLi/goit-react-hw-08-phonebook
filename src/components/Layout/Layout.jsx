import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Flex, Text, Spinner } from '@chakra-ui/react';
import { AnimatedBg } from 'components/AnimatedBg/AnimatedBg';
import { Suspense } from 'react';

export const Layout = () => {
  const token = useSelector(selectToken);
  const location = useLocation();

  return location.pathname !== '/login' ? (
    <Box
      w={'100%'}
      minH={'100vh'}
      bgGradient="linear(to-r, #302b63, #24243e )"
      display={'flex'}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        as="header"
        px={4}
        py={4}
        fontSize={['sm', 'md', 'lg']}
        w={['300px', '440px', '750px', '970px', '1200px']}
      >
        <Flex w={'100%'} justify="space-between" align="center" gap={'30px'}>
          <Text color="white" as={'i'}>
            Phonebook
          </Text>
          <Navigation />
          {token ? <UserAuthMenu /> : <AuthNavigation />}
        </Flex>
      </Box>
      <main>
        <Suspense
          fallback={
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#2563EB"
              size="xl"
              position={'absolute'}
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Box
        as={'footer'}
        bgGradient="linear(to-l,#2563EB, #D946EF )"
        bgClip="text"
        alignItems={'center'}
        px={3}
        py={3}
        fontSize={'sm'}
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
          <Suspense
            fallback={
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#2563EB"
                size="xl"
                position={'absolute'}
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              />
            }
          >
            {location.pathname === '/login' && <AnimatedBg />}
            <Outlet />
          </Suspense>
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
