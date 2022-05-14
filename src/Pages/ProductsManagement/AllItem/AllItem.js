import React from "react";
import { Container, Row } from "react-bootstrap";
import UseProducts from "../../../hooks/useProducts";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Product from "../Product/Product";

const AllItem = () => {
  const [products] = UseProducts();
  return (
    <Container className="mt-5">
      <PageTitle title="All Item" />
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products.length === 0 ? (
          <Loading />
        ) : (
          products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))
        )}
      </Row>
    </Container>
  );
};

export default AllItem;
