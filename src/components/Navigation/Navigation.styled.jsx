import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Link = styled(NavLink)`
  padding: 8px 0;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  outline: transparent;
  text-decoration: none;
  color: var(--header-text-color);
  font-weight: 500;

  transition: scale var(--transition-function), color var(--transition-function);

  & + & {
    margin-left: 100px;
    position: relative;
  }

  :last-child {
    margin-left: auto;
  }

  :not(:last-child)::after {
    content: '';
    position: absolute;
    margin-left: 90px;
    display: inline-block;
    background-color: var(--border-color);
    width: 2px;
    height: 42px;
    pointer-events: none;
  }

  :hover,
  :focus {
    scale: 1.2;
    color: var(--hover-color);
  }

  &.active {
    color: var(--active-link-color);
  }
`;
