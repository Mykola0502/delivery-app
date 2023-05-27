import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout';

const HomePage = lazy(() => import('pages/Home'));
const ShopPage = lazy(() => import('pages/Shop'));
const CartPage = lazy(() => import('pages/Cart'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
