import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <>
      <Box as="header" bg="tomato" w="100%" color="white">
        <AppBar />
      </Box>
      <main>
        <Outlet />
      </main>
    </>
  );
};
