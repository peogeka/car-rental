import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  position: relative;
  transition: color 0.3s ease;

  &.active {
    color: #3470FF;
    border-bottom: 2px solid #3470FF;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #e16d36;
  padding: 10px 0;
`;

export const HeaderContainer = styled.header`
  /* padding: 5px;
  /* border-bottom: 1px solid; */ */
`;

export const HeaderNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const HeaderItem = styled.li`
  margin: 0 15px;
`;
