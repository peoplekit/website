import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/header';
import { Container, Toolbar } from '@mui/material';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Toolbar sx={{ mb: 2 }} />
        <Outlet />
      </Container>
    </>
  );
};
