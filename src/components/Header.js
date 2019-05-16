import React from 'react';
import styled from 'styled-components';
import StyledNavLink from './NavLink';

const StyledHeader = styled.header`
  margin-bottom: 20px;
`;

const StyledHeadline = styled.h1`
  margin: auto;
  padding: 10px 0;
  text-align: center;
`;

const Navigation = styled.nav`
  background: peachpuff;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledHeadline>gfK Workshops</StyledHeadline>
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
