import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, img, description, price, quantity, supplier } = product;
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <Col>
      <Card className=" h-100 border-0 shadow rounded-3">
        <Card.Img className="w-100" variant="top" src={img} />
        <Card.Body className="d-flex flex-column">
          <h4>{name}</h4>
          <h6>
            <i>
              By <span className="text-info">{supplier}</span>{" "}
            </i>
          </h6>
          <h6>
            Quantity :{" "}
            {quantity <= 0 ? (
              <span className="text-danger fw-bold">sold out</span>
            ) : (
              quantity
            )}
          </h6>
          <h5>${price}</h5>
          <p>
            {description.slice(0, 150)}{" "}
            <span className="text-muted">learn more ...</span>
          </p>
          <Button
            onClick={() => handleNavigate(_id)}
            variant="light"
            className="btn btn-sm btn-outline-dark mt-auto"
          >
            {" "}
            <span className="me-3">UPDATE</span>
            <FontAwesomeIcon icon={faSliders} />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
