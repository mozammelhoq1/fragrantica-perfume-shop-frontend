import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const MyItem = () => {
  const [user] = useAuthState(auth);

  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    const email = user.email;
    const url = `http://arcane-sea-21908.herokuapp.com/myitem?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);

  const handleDelete = (id) => {
    const prcced = window.confirm("are u want to sure?");
    if (prcced) {
      const url = `https://arcane-sea-21908.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };

  return (
    <Container className="my-5">
      <PageTitle title="My Item" />
      <Container className="mt-5">
        {items.length === 0 ? (
          <p className="text-center">" Why You cannot add any item 😒?"</p>
        ) : (
          <Table variant="light" striped bordered hover responsive>
            <thead>
              <tr className="text-center">
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
                  <th key={index}>Action</th>
                ))}
              </tr>
            </thead>
            {items.map((product) => (
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
                        className="border-0 p-0 bg-dark"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            ))}
          </Table>
        )}
      </Container>
    </Container>
  );
};

export default MyItem;
