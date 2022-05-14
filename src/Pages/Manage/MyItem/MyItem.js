import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItem, setMyItem] = useState([]);
  useEffect(() => {
    const email = user?.email;
    fetch(`http://localhost:5000/products?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyItem(data));
  }, [user]);

  return (
    <Container className="my-5">
      <PageTitle title="My Item" />
      <h1>{myItem.length}</h1>
      <h3>{myItem.name}</h3>
    </Container>
  );
};

export default MyItem;
