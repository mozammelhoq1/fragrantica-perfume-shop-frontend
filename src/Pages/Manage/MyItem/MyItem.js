import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItem, setMyItem] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getMyItem = async () => {
      const email = user.email;
      const url = `http://localhost:5000/myitem?email=${email}`;
      try {
        await fetch(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setMyItem(data));
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getMyItem();
  }, [navigate, user]);

  return (
    <Container className="my-5">
      <PageTitle title="My Item" />
      <h1>{myItem.length}</h1>
      {/* <h3>
        {myItem.map((item) => (
          <h1 item={item} key={item._id}>
            {item.name}
          </h1>
        ))}
      </h3> */}
    </Container>
  );
};

export default MyItem;
