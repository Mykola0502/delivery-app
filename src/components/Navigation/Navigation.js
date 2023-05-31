import { Link, Nav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Shopping Cart</Link>
    </Nav>
  );
};
