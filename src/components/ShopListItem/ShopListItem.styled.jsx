import styled from 'styled-components';

export const ShopBtn = styled.button`
  padding: 15px 5px;
  width: 100%;
  border: 2px solid var(--border-color);
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  background-color: var(--bg-color);
  cursor: pointer;

  transition: background-color var(--transition-function),
    box-shadow var(--transition-function);

  &:hover,
  &:focus {
    background-color: #cfe0d1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
  }
`;
