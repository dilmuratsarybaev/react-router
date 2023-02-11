import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/UI/Button";
import { Card } from "../../components/UI/Card";

export const ProductDetails = () => {
  const history = useNavigate()
  const { id } = useParams();
  return (
    <Content>
      <Card>
        <p> Product Details Page </p>
        Product Name {id}
      </Card>
      <Button onClick={()=> history("/product")}>Go back</Button>
    </Content>
  );
};

const Content = styled.div`
  text-align: left;
  padding: 1rem;
  width: 50rem;
  margin: 0 auto;
`;
