import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/perfume.png";

const NavigationBar = () => {
  return (
    <Navbar
      bg="warning"
      variant="light"
      expand="lg"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand href="#">
          <img height={50} src={logo} alt="" />
          <span className="fs-3 fw-bolder">FRAGRANTICA</span>
          <br />
          <small className="text-secondary fs-6">FREE TO CHOOSE</small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto text-center my-2 my-lg-0" navbarScroll>
            <Link to="/home" className="btn btn-outline-dark mx-3 my-2">
              HOME
            </Link>
            <Link to="/blogs" className="btn btn-outline-dark mx-3 my-2">
              BLOGS
            </Link>
            <Link to="/about" className="btn btn-outline-dark mx-3 my-2">
              ABOUT US
            </Link>
            {/* {user ? (
              <Link
                to="/login"
                onClick={handleSignOut}
                className="text-decoration-none fw-bold mx-3 my-2  text-dark"
              >
                <span className="me-2">LOG Out</span>
                <FontAwesomeIcon icon={faCircleArrowRight}></FontAwesomeIcon>
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-decoration-none fw-bold mx-3 my-2  text-dark"
              >
                <span className="me-2">LOG IN</span>
                <FontAwesomeIcon icon={faCircleArrowLeft}></FontAwesomeIcon>
              </Link>
            )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
