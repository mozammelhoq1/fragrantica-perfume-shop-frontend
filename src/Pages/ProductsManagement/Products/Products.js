import React from "react";
import { Container, Row } from "react-bootstrap";
import UseProducts from "../../../hooks/useProducts";
import Loading from "../../Shared/Loading/Loading";
import Product from "../Product/Product";

const Products = () => {
  const [products] = UseProducts();

  const newProducts = products.sort(() => Math.random() - Math.random());

  return (
    <Container className="mt-5">
      <div className="d-flex align-items-center my-5">
        <div style={{ height: "2px" }} className="bg-dark w-50"></div>
        <span className="p-3 fs-4 shadow-sm bg-light rounded-3">
          <b>Fragram</b>
        </span>
        <div style={{ height: "2px" }} className="bg-dark w-50"></div>
      </div>
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
