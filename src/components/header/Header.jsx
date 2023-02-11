import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Header = () => {

  return (
    <StyledHeader>
      <h2>Logo</h2>
      <nav>
        <NavList>
          <LiItem>
            <StyledNavLink to="product">Product</StyledNavLink >
          </LiItem>
          <LiItem>
            <StyledNavLink to="my_cart">My Cart</StyledNavLink>
          </LiItem>

          <LiItem>
            <StyledNavLink to="my_orders">My Orders</StyledNavLink>
          </LiItem>
        </NavList>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  background-color: #2963ce;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
  color: #fff;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
`;
const LiItem = styled.li`
  margin-right: 2rem;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  :focus{
    color:black;
  }
`;
