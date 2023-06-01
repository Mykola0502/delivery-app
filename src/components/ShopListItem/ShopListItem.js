import { ShopBtn } from './ShopListItem.styled';

export const ShopListItem = ({ shop, onClickBtn }) => {
  const onBtnClick = () => {
    // console.log(shop);
    onClickBtn(shop);
  };

  // const onBtnClick = () => {
  //   // console.log(shop);
  //   onClick(shop.id);
  // };

  return (
    <ShopBtn type="button" onClick={onBtnClick}>
      {shop.name}
    </ShopBtn>
  );
};
