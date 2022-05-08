import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const ManageProduct = () => {
  const { productId } = useParams();
  return (
    <Container className="mt-5">
      <PageTitle title="Single Item" />
      <h1>manage product : {productId} </h1>
    </Container>
  );
};

export default ManageProduct;
