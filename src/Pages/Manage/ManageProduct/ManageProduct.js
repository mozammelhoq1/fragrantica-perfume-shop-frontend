import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const ManageProduct = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <Container className="mt-5">
      <PageTitle title="Single Item" />
      <h1>manage product : {productId} </h1>
      <h2>you r restock : {product.name} </h2>
    </Container>
  );
};

export default ManageProduct;
