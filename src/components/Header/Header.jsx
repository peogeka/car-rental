import React from 'react';
import { StyledLink} from 'components/Layout/Layout.styled';
import { HeaderContainer, Nav, HeaderNav,HeaderItem } from 'components/Layout/Layout.styled';

export const Header = () => {
    return (
      <HeaderContainer>
        <Nav>
          <HeaderNav>
            <HeaderItem>
              <StyledLink to="/">Home</StyledLink>
            </HeaderItem>
            <HeaderItem>
              <StyledLink to="/catalog">Catalog</StyledLink>
            </HeaderItem>
            <HeaderItem>
              <StyledLink to="/favorites">Favoirtes</StyledLink>
            </HeaderItem>
          </HeaderNav>
        </Nav>
      </HeaderContainer>
    );
  };