import { faPlusSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../../ProductsManagement/Product/Product";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleDelete = (id) => {
    const prcced = window.confirm("are u want to sure?");
    if (prcced) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <Container className="mt-5">
      <div className="text-end mb-5">
        <Link to="/addproduct" className="btn btn-outline-dark mx-3 my-2 ">
          <span className="me-2">Add New Product</span>{" "}
          <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
        </Link>
      </div>
      {/* <div>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
      </div> */}
      <Table variant="light" striped bordered hover responsive>
        <thead>
          <tr>
            {Array.from({ length: 1 }).map((_, index) => (
              <th key={index}>Image</th>
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <th key={index}>Name</th>
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <th key={index}>Price</th>
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <th key={index}>Quantity</th>
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <th key={index}>Supplier</th>
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <th key={index}>Delete</th>
            ))}
          </tr>
        </thead>
        {products.map((product) => (
          <tbody key={product._id}>
            <tr className="text-center">
              {Array.from({ length: 1 }).map((_, index) => (
                <td key={index}>
                  <img width={50} src={product?.img} alt="" />{" "}
                </td>
              ))}
              {Array.from({ length: 1 }).map((_, index) => (
                <td key={index}>{product?.name} </td>
              ))}

              {Array.from({ length: 1 }).map((_, index) => (
                <td key={index}>
                  <sup>$</sup>
                  {product?.price}{" "}
                </td>
              ))}

              {Array.from({ length: 1 }).map((_, index) => (
                <td key={index}>{product?.quantity} </td>
              ))}

              {Array.from({ length: 1 }).map((_, index) => (
                <td key={index}>{product?.supplier} </td>
              ))}

              {Array.from({ length: 1 }).map((_, index) => (
                <td key={index}>
                  <Button
                    onClick={() => handleDelete(product._id)}
                    className="border-0 p-0"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Button>
                </td>
              ))}
              {/* onClick={() => handleDelete(purchase?._id)} */}
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default Inventory;
