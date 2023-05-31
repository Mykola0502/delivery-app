import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from 'components/AppBar';
import { Loader } from 'components/Loader';
import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
