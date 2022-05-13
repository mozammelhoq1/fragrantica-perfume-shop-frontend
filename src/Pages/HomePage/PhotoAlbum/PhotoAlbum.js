import React from "react";
import { Container } from "react-bootstrap";

const PhotoAlbum = () => {
  return (
    <Container className="my-5">
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-dark w-50"></div>
        <span className="px-4 fs-2 fw-bold shadow-sm bg-light"> Photos</span>
        <div style={{ height: "2px" }} className="bg-dark w-50"></div>
      </div>
    </Container>
  );
};

export default PhotoAlbum;
