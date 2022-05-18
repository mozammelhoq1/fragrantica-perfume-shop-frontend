import React from "react";
import { Container } from "react-bootstrap";
import PageTitle from "../Shared/PageTitle/PageTitle";

const Blogs = () => {
  return (
    <Container className="my-5">
      <PageTitle title="Blogs" />
      <h3>Difference between javascript and nodejs</h3>
      <ul>
        <li>
          JavaScrip is a simple programming language where Node Js is a
          Javascript run time environment.
        </li>
        <li>
          JavaScript can runs in any browser JavaScript Engine. Nodejs does not
          have capability to add HTML tags where javascript have the capability
          to add, remove and create HTML tags.
        </li>
        <li>
          The main difference is Javascript is used in frontend development and
          Nodejs is used in server-side development.
        </li>
      </ul>

      <h3>Differences between sql and nosql databases.</h3>
      <ul>
        <li>
          SQL database are vertically scalable and NOSQL data base are
          horizontally scalable.
        </li>
        <li>
          Nosql database are document wheres Sql database are table based.
        </li>
        <li>
          Sql databases have fixed or static Nosql database are pure dynamic.
        </li>
        <li>
          Sql databases are best suited for complex queries and Nosql databases
          are not so good for complex queries
        </li>
      </ul>
      <h3>What is the purpose of jwt and how does it work</h3>
      <p>
        JWT is the Jason Web Token. It sends securely transmitted information
        from the client side to the server side so that we can catch anyone who
        wants to lose access to a user. So the user who is not authorized will
        not be given access to the data.
      </p>
      <p>
        When the client logs in with username and password, the server creates a
        token for the client, then the token is sent from the server to the
        client, then the token is stored in client local storage or browser
        cookies. Later when the client comes and requests for the token again,
        the token is copied and sent to server side to authenticate whether the
        client is valid or not. The server verifies whether it is authorized or
        not before giving the JWT token to the client. The server then responds
        to the client request and gives permission to the user
      </p>
    </Container>
  );
};

export default Blogs;
