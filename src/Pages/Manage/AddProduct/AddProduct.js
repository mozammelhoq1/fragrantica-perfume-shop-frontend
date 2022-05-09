import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
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
  //   const handlePlaceOrder = (e) => {
  //     e.preventDefault();
  //     const order = {
  //       email: user.email,
  //       service: service.name,
  //       serviceId: serviceId,
  //       address: e.target.address.value,
  //       phone: e.target.phone.value,
  //     };
  //     axios.post("http://localhost:5000/order", order).then((response) => {
  //       const { data } = response;
  //       if (data.insertedId) {
  //         toast("thank you for your order");
  //         e.target.reset();
  //       }
  //     });
  //   };
  return (
    <Container className="mt-5 w-75">
      <h1 className="text-center">Please Add A Product</h1>
      {/* <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name", { required: true })} />
        <input type="number" {...register("price", { required: true })} />
        <input type="text" {...register("description", { required: true })} />
        <input type="number" {...register("quantity", { required: true })} />
        <input type="text" {...register("supplier", { required: true })} />
        <input type="submit" />
      </form> */}
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
