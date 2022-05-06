import {
  faAngleRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Row className="mx-auto bg-warning g-5">
      <Col xs={12} md={4} className="text-start fw-normal">
        {/* <img height={50} className="mb-4" src={logo} alt="" /> */}
        <span className="text-danger fs-5 fw-bold fw-bold">
          Masum's Dental Spa
        </span>

        <h4>
          <span className="border-dark border-bottom border-5 pb-1 ">
            Bangladesh
          </span>
        </h4>
        <p className="mt-3">
          {" "}
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          <span className="ms-2">
            Level-3, 24, Agrabad, DoubleMooring, Chittagong
          </span>
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          <span className="ms-2">Official: masum's-denta-spa.com</span>
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <span className="ms-2">Helpline: 01822777360 , 01759427128</span>
        </p>
        <small>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</small>
        {/* <img className="img-fluid mt-3" src={googlePay} alt="" /> */}
      </Col>
      <Col xs={12} md={4} className="text-start">
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Patient Resources</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">About Me</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Terms & Conditions</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Success</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Blog</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Connect Me</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Reviews</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Masum,s Dental Spa</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Pay Online</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">FAQs</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Terms & Conditions</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Privacy Policy</span>
        </a>
        <br />
      </Col>
      <Col xs={12} md={4} className="text-start text-light">
        {/* <img className="w-100" src={paymentMethod} alt="" /> */}
      </Col>
      <p className="fw-bold text-center pt-3">
        Copyrights | © 2010-{year} | Fragrantica.com perfumes magazine - All
        Rights Reserved - do not copy anything without prior written permission.
        Please read the <span className="text-danger">Terms of Service</span>{" "}
        and <span className="text-danger">Privacy policy</span> .
      </p>
    </Row>
  );
};

export default Footer;
