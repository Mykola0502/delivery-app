import styled from 'styled-components';

export const ShopListWrapper = styled.div`
  padding: 30px 50px;
  max-width: 250px;
  width: 100%;
  height: 75vh;
  border: 2px solid var(--border-color);
  border-radius: 10px;
  text-align: center;

  ul {
    list-style: none;
  }
`;

export const ListItem = styled.li`
  margin-top: 15px;

  & + & {
    margin-top: 15px;
  }
`;
