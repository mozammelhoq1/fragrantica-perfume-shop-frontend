import React from "react";
import { Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container>
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
      <h3>When should you use nodejs and when should you use mongodb</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        vitae esse fugiat labore blanditiis! Fugit qui mollitia amet possimus.
        Optio blanditiis odio quia aut cupiditate sit? Ratione veniam
        consequuntur sequi!
      </p>
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum iste
        molestiae earum quia unde aliquam. Enim maxime id vero! Exercitationem
        commodi nisi assumenda veniam vitae facere quos amet fugit repellat.
      </p>
    </Container>
  );
};

export default Blogs;
