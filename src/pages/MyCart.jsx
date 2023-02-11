import React from "react";
import { Button } from "../components/UI/Button";
import { Card } from "../components/UI/Card";

export const MyCart = ({goBackHandler}) => {
  return (
   <>
    <Card>My Cart Page bla bla bla</Card>
    <Button onClick={goBackHandler}>Go back</Button>
   </>
  )
};
