import {
  ShopBtn,
} from './ShopListItem.styled';

export const ShopListItem = ({ shop }) => {
  return <ShopBtn>{shop.name}</ShopBtn>;
};
