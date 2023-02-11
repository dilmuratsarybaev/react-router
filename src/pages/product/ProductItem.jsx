import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/UI/Button";
export const ProductItem = ({ item, onSubmit }) => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    onSubmit();
    navigate(`${item.id}/details`);
  };
  return (
    <Container>
      <p>
        {item.title}
        {item.id}
      </p>
      <Button onClick={clickHandler}>DETAILS</Button>
    </Container>
  );
};
const Container = styled.div`
  width: 30rem;
  padding: 2rem;
  background-color: #fff;
  color: black;
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  border-radius: 0.5rem;
  align-items: center;
`;
