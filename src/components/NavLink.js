import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  background: papayawhip;
  color: darkslategray;
  border-radius: 5px;
  border: darkslategray solid 1px;
  text-decoration: none;
  margin-left: 5px;
  margin-right: 5px;
  padding: 8px;

  &:hover {
    background: #3344;
  }

  &.active {
    background: rgb(255, 250, 241);
  }
`;

export default StyledNavLink;
