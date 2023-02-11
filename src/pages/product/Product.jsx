
import styled from "styled-components";
import { ProductItem } from "./ProductItem";
const PRODUCT = [
  {
    title: "Product Name ",
    id: 1,
  },
  {
    title: "Product Name ",
    id: 2,
  },
];
export const Product = ({ changeDetailsHandler, goBackHandler }) => {
  

  return (
    <>
      {PRODUCT.map((item) => {
        return <ProductItem item={item} onSubmit={changeDetailsHandler} />;
      })}
      <StyledButton onClick={goBackHandler} >Go back</StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #0ac0a2;
  border-radius: 1rem;
  border: none;
  font-weight: 900;
  color: #fff;
  margin-right: 23rem;
`;
