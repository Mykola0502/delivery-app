import { ShopListItem } from 'components/ShopListItem';
import { ListItem, ShopListWrapper } from './ShopList.styled';

export const ShopList = ({ shops }) => {
  return (
    <ShopListWrapper>
      <h2> Shops:</h2>
      <ul>
        {shops.map(shop => (
          <ListItem key={shop.id}>
            <ShopListItem shop={shop} />
          </ListItem>
        ))}
      </ul>
    </ShopListWrapper>
  );
};
