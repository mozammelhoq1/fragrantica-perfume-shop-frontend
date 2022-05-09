import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const ManageProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [update, setUpdate] = useState(true);
  const { name, quantity } = product;

  useEffect(() => {
    const url = `http://localhost:5000/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, update]);
  const handleRestock = (e) => {
    e.preventDefault();
    const newQuantity = parseInt(e.target.quantity.value);
    const updateQuantity = quantity + newQuantity;
    console.log("Update Quantity : ", updateQuantity);
    const url = `http://localhost:5000/products/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updateQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdate(!update);
        alert("update quantity successfully");
        e.target.reset();
      });
  };
  return (
    <Container className="mt-5">
      <PageTitle title="Single Item" />
      <h1>manage product : {productId} </h1>
      <h2>you r restock : {name} </h2>
      <h1> Quantity : {quantity} </h1>
      <Col>
        <Row className="g-5 mx-auto pb-5 align-items-center justify-content-center">
          <Col xs={12} sm={12} md={6}>
            <img className="w-100 rounded-3" src={product.img} alt="" />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Form onSubmit={handleRestock}>
              <Form.Control
                name="quantity"
                size="lg"
                type="number"
                placeholder="Large text"
                required
              />
              <Button
                className="btn btn-sm btn-outline-dark w-100 my-2"
                variant="light"
                type="submit"
              >
                SUBMIT
              </Button>
            </Form>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default ManageProduct;
