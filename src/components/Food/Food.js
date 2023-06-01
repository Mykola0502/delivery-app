import { FoodBtn, FoodItem, FoodWrapper } from './Food.styled';

export const Food = ({ food }) => {
  return (
    <FoodWrapper>
      {food.map(item => (
        <FoodItem key={item.id}>
          <div>
            <img src={item.imgURL} alt="" />
          </div>
          <p>{item.name}</p>
          <p>Price: {item.price}</p>
          <FoodBtn>add to Cart</FoodBtn>
        </FoodItem>
      ))}
    </FoodWrapper>
  );
};
