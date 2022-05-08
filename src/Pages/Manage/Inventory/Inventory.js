import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../../ProductsManagement/Product/Product";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container className="mt-5">
      <div className="text-end mb-5">
        <Link to="/addproduct" className="btn btn-outline-dark mx-3 my-2 ">
          <span className="me-2">Add New Product</span>{" "}
          <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
        </Link>
      </div>
      <div>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Inventory;
