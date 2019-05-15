import React from 'react';
import styled from 'styled-components';
import StyledNavLink from './NavLink';

const StyledHeader = styled.header`
  background: peachpuff;
  padding: 20px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Navigation>
        <StyledNavLink exact to="/">
          Workshops
        </StyledNavLink>
        <StyledNavLink to="/create">Add Workshop</StyledNavLink>
      </Navigation>
    </StyledHeader>
  );
}

export default Header;
