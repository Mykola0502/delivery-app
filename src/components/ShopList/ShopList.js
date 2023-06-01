import { ShopListItem } from 'components/ShopListItem';
import { ListItem, ShopListWrapper } from './ShopList.styled';

export const ShopList = ({ shops, onClick }) => {
  return (
    <ShopListWrapper>
      <h2> Shops:</h2>
      <ul>
        {shops.map(shop => (
          <ListItem key={shop.id}>
            <ShopListItem shop={shop} onClickBtn={onClick} />
          </ListItem>
        ))}
      </ul>
    </ShopListWrapper>
  );
};
