import React from "react";
import styled from "styled-components";
export const Card = ({ children }) => {
  return <Container>{children}</Container>;
};
const Container = styled.div`
  padding: 1.5rem;
  height: 10rem;
  width: 50rem;
  background-color: #fff;
  margin: 2rem auto;
  text-align: left;
  font-weight: 600;
  border-radius: 0.5rem;
`;
