import { ListItem, ShopListWrapper } from './ShopList.styled';

export const ShopList = () => {
  return (
    <ShopListWrapper>
      <h2> Shops:</h2>
      <ul>
        <ListItem>Mc Donny</ListItem>
        <ListItem>CFK</ListItem>
        <ListItem>etc...</ListItem>
        <ListItem>etc...</ListItem>
        <ListItem>etc...</ListItem>
      </ul>
    </ShopListWrapper>
  );
};
