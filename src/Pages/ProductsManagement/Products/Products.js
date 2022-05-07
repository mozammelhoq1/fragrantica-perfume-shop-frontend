import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
