import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      email: user?.email,
      name: e.target.name.value,
      img: e.target.img.value,
      price: parseInt(e.target.price.value),
      description: e.target.description.value,
      quantity: parseInt(e.target.quantity.value),
      supplier: e.target.supplier.value,
    };
    const url = `http://localhost:5000/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Added Product Successfully");
        e.target.reset();
        console.log(data);
      });
  };
  return (
    <Container className="mt-5 w-75">
      <h1 className="text-center">Please Add A Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Name" required name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Photo URL"
            required
            name="img"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="number"
            placeholder="Price"
            required
            name="price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} required name="description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="number"
            placeholder="Quantity"
            required
            name="quantity"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Supplier Name"
            required
            name="supplier"
          />
        </Form.Group>
        <Button
          className="btn btn-sm btn-outline-dark w-100 my-2"
          variant="light"
          type="submit"
        >
          ADD PRODUCT
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
