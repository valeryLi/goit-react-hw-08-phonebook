import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
