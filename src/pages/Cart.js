import {
  useState,
  // useEffect
} from 'react';
import { Loader } from 'components/Loader';

const ShoppingCart = () => {
  const [
    loading,
    // setLoading
  ] = useState(false);

  return (
    <main>
      <h1>Shopping Cart</h1>
      {loading && <Loader />}
    </main>
  );
};

export default ShoppingCart;
