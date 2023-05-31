import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 8px 0;
  margin-bottom: 16px;
  align-items: center;
  background-color: var(--bg-header-color);
  border-bottom: 1px solid #521919;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  gap: var(--indent);
`;
