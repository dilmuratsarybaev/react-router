import React from "react";
import { Button } from "../components/UI/Button";
import { Card } from "../components/UI/Card";

export const MyOrders = ({ goBackHandler }) => {
  return (
    <>
      <Card>My Orders Page bla bla bla bla bla</Card>
      <Button onClick={goBackHandler}>Go back</Button>
    </>
  );
};
