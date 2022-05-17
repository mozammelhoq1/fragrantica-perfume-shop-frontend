import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat, faReply } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const ManageProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [update, setUpdate] = useState(true);
  const { name, supplier, quantity, price, description } = product;

  useEffect(() => {
    const url = `https://arcane-sea-21908.herokuapp.com/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, update]);
  const handleRestock = (e) => {
    e.preventDefault();

    const newQuantity = parseInt(e.target.quantity?.value);
    const updateQuantity = quantity + newQuantity;
    // check if number is greater than 0
    if (newQuantity < 0) {
      e.target.reset();
      toast.error("You Cannot Add Negative Number");
      return updateQuantity;
    }
    const url = `https://arcane-sea-21908.herokuapp.com/products/${productId}`;
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
        toast.success("Product Delivery Successfully");
        e.target.reset();
      });
  };
  const handleDelivery = () => {
    const updateQuantity = parseInt(quantity - 1);

    // check if number is greater than 0
    if (updateQuantity < 0) {
      toast.error("This Product Is Not Available");
      return updateQuantity;
    }
    if (updateQuantity === 0) {
    }

    const url = `https://arcane-sea-21908.herokuapp.com/products/${productId}`;
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
        toast.success("Product Delivery Successfully");
      });
  };
  return (
    <Container className="mt-5">
      <PageTitle title="Single Item" />
      <Toaster />

      <Row className="g-5 mx-auto  pb-5 my-5 align-items-center justify-content-center shadow-sm rounded-3 ">
        <Col xs={8} sm={8} md={4}>
          <img className="w-100 " src={product.img} alt="" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <p>Product Id : {productId}</p>
          <p>Name : {name}</p>
          <p>Supplier : {supplier}</p>
          <p>
            Quantity :{" "}
            {quantity === 0 ? (
              <b className="text-danger">sold-out</b>
            ) : (
              quantity
            )}
          </p>
          <p>Price : $ {price}</p>
          <p>Description : {description}</p>
          <Button
            className="btn btn-sm btn-outline-dark w-100 my-2"
            variant="light"
            onClick={handleDelivery}
          >
            Delivery <FontAwesomeIcon icon={faRepeat} />
          </Button>
        </Col>
      </Row>
      <Form
        onSubmit={handleRestock}
        className="shadow-sm bg-light p-5 rounded-pill"
      >
        <Col className="d-flex mx-auto w-100">
          <Form.Control
            name="quantity"
            type="number"
            placeholder="Quantity"
            required
          />
          <Button
            className="btn ms-3 d-flex mx-auto align-items-center  btn-outline-dark"
            variant="light"
            type="submit"
            style={{ height: "40px" }}
          >
            RESTOCK <FontAwesomeIcon className="ms-2" icon={faReply} />
          </Button>
        </Col>
      </Form>
    </Container>
  );
};

export default ManageProduct;
