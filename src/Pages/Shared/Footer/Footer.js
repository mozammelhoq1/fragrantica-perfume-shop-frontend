import {
  faAngleRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import googlePlay from "../../../Images/google-play.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Row className="mx-auto bg-warning g-5 mt-5">
      <Col xs={12} md={4} className="text-start fw-normal">
        <span className="text-secondary fs-5 fw-bold ">FRAGRANTICA</span>

        <h4>
          <span className="border-dark border-bottom border-5 py-1 ">
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
          <span className="ms-2">Official: fragrantica-perfume@gmail.com</span>
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <span className="ms-2">Helpline: 01822777360 , 01759427128</span>
        </p>
        <small>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</small>
        <h4>
          <span className="border-dark border-bottom border-5 py-1 ">
            United State
          </span>
        </h4>
        <p className="mt-3">
          {" "}
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          <span className="ms-2">
            1640 Atha Drive, Lancaster, CA, California, USA
          </span>
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          <span className="ms-2">Official: fragrantica-perfume@gmail.com</span>
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <span className="ms-2">Helpline: 661-727-0455 , 323-984-0637</span>
        </p>
        <small>(Available : Mon - Sat, 10:00 AM to 7:00 PM)</small>
      </Col>
      <Col xs={12} md={4} className="text-start">
        <h4 className="text-secondary fw-bold mb-3">
          Popular brands and perfumes
        </h4>
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Acqua di Parma</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Baccarat Rouge 540</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Lancome</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Maison Martin</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Roja Dove</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Creed</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">O Boticário</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Xerjoff</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Hugo Boss</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Lalique</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Estée Lauder</span>
        </a>
        <br />
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Gucci</span>
        </a>
        <br />
      </Col>
      <Col xs={12} md={4} className="text-start">
        <h4 className="text-secondary fw-bold mb-3">
          Fragrantica in your language:
        </h4>
        <p className="lh-lg">
          | Deutsch | Español | Français | Italiano | Русский | Polski | Bengali
          | Português | Ελληνικά | 汉语 | Nederlands | Srpski | Română | العربية
          | Українська | Монгол | עברית | Luxois Watches | Beauty Almanac |
        </p>
        <img className="img-fluid mt-3" src={googlePlay} alt="" />
      </Col>
      <p className="fw-bold text-center pt-3">
        Copyrights | © 2010-{year} | Fragrantica.com perfumes magazine - All
        Rights Reserved - do not copy anything without prior written permission.
        Please read the <span className="text-danger">Terms of Service</span>{" "}
        and <span className="text-danger">Privacy policy</span> .
      </p>
      <p className="fw-bold text-center">Fragrantica® Inc, United States</p>
    </Row>
  );
};

export default Footer;
