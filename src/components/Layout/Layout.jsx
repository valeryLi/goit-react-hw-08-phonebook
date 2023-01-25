import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Box bgGradient="linear(to-r, #302b63, #24243e )" w="100%" h="100vh">
      <Box as="header">
        <AppBar />
      </Box>
      <main>
        <Outlet />
      </main>
      <footer>@2023 Phonebook. Created by valeryLi.</footer>
    </Box>
  );
};

// bgGradient = 'linear(to-l,#2563EB, #D946EF )';
