import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Loading from "../../Shared/Loading/Loading";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  const newProducts = products.sort(() => Math.random() - Math.random());

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container className="mt-5">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products.length === 0 ? (
          <Loading />
        ) : (
          newProducts
            .slice(0, 6)
            .map((product) => (
              <Product key={product._id} product={product}></Product>
            ))
        )}
      </Row>
    </Container>
  );
};

export default Products;
