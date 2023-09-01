import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/header';
import { Toolbar } from '@mui/material';
import Footer from '@components/footer.tsx';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Toolbar sx={{ mb: 2 }} />
      <Outlet />
      <Footer />
    </>
  );
};
