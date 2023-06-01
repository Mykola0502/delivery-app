import styled from 'styled-components';

export const FoodWrapper = styled.ul`
  padding: 20px 50px;
  /* max-width: 250px; */
  width: 100%;
  height: 78vh;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  border: 2px solid var(--border-color);
  border-radius: 10px;
  /* text-align: center; */

  overflow-y: scroll;

  list-style: none;
`;

export const FoodItem = styled.li`
  /* margin-top: 15px; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 90px) / 2);
  gap: var(--indent);
  outline: 2px solid var(--border-color);
  border-radius: 10px;

  /* text-align: center; */
  /* font-size: 20px; */
  /* font-weight: 700; */

  div {
    flex-grow: 1;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const FoodBtn = styled.button`
  margin-left: auto;
  padding: 5px 25px;
  /* outline: 1px solid var(--border-color); */
  border-radius: 10px;
  background-color: #9df2ec;
  cursor: pointer;

  transition: background-color var(--transition-function),
    box-shadow var(--transition-function);

  &:hover,
  &:focus {
    background-color: #f891ea;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
  }
`;
