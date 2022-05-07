import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../../Images/login.jpg";
const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  let errorElement;

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };
  const navigateRegister = (e) => {
    navigate("/register");
  };
  const resetPassword = async () => {};
  return (
    <Container className="mt-5">
      <Row className="g-5 mx-auto pb-5 align-items-center justify-content-center">
        <Col xs={12} sm={12} md={6}>
          <img className="w-100 rounded-3" src={loginImg} alt="" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <h1 className="text-center">Please Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            {errorElement}
            <Button
              className="btn btn-sm btn-outline-dark w-100 my-2"
              variant="light"
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <div className="mt-3">
            <p>
              New To Fragrantica?{" "}
              <Link
                to="/register"
                className="text-primary pe-auto"
                onClick={navigateRegister}
              >
                Please Register
              </Link>
            </p>
            <p>
              Forget Password?{" "}
              <button
                className="btn btn-link text-primary pe-auto"
                onClick={resetPassword}
              >
                Reset Password
              </button>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
