import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../Firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Photo URL"
            {...register("img", { required: true })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="number"
            placeholder="Price"
            {...register("price", { required: true })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            {...register("description", { required: true })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="number"
            placeholder="Quantity"
            {...register("quantity", { required: true })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Supplier Name"
            {...register("supplier", { required: true })}
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
