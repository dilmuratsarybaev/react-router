import React from "react";
import styled from "styled-components";

export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #0ac0a2;
  border-radius: 1rem;
  border: none;
  font-weight: 900;
  color: #fff;
`;
