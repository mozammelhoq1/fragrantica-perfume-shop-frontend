import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UseProducts from "../../../hooks/useProducts";
const PhotoAlbum = () => {
  const [products] = UseProducts();

  //   console.log([products.map((product) => console.log(product.img))]);

  return (
    <Container className="my-5">
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-dark w-50"></div>
        <span className="d-flex p-3 fs-4 shadow-sm bg-light rounded-pill">
          {" "}
          <b>Recently</b> <b className="mx-3">Added</b> <b>Fragram</b>
        </span>
        <div style={{ height: "2px" }} className="bg-dark w-50"></div>
      </div>
      <Container>
        <Row xs={2} md={3} lg={4} xl={2} className="mx-auto g-4 my-5">
          {products.slice(-4).map((item) => (
            <Col key={item._id}>
              {/* <img
                className="w-100 h-100"
                key={item._id}
                img={item.img}
                src={item.img}
                alt={item.name}
              ></img>
              <b className="text-center mt-5">{item.name}</b> */}
              <Card className="border-0 shadow-none bg-light d-flex flex-column h-100">
                <Card.Img
                  className="w-100 h-100"
                  variant="top"
                  src={item.img}
                />
                <Card.Body className="text-center">
                  <b>{item.name}</b>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default PhotoAlbum;
