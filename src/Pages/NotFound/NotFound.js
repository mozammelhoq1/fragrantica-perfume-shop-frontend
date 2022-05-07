import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFound from "../../Images/notFound.png";

const NotFound = () => {
  return (
    <Container className="d-flex flex-column">
      <img className="w-50 mx-auto" height={500} src={notFound} alt="" />
      <Link
        to="/home"
        className="btn btn-outline-dark mx-3 my-2 d-block w-50 mx-auto"
      >
        GO TO HOME
      </Link>
    </Container>
  );
};

export default NotFound;
