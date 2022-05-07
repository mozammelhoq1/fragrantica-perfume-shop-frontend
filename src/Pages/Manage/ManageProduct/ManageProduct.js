import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ManageProduct = () => {
  const { productId } = useParams();
  return (
    <Container className="mt-5">
      <h1>manage product : {productId} </h1>
    </Container>
  );
};

export default ManageProduct;
