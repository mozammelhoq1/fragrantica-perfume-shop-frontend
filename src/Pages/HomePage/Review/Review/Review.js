import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";

import userPic from "../../../../Images/user.png";

const Review = ({ review }) => {
  const { name, img, comment, rating } = review;
  return (
    <Card className="border-0  h-100  py-3">
      <Card.Img
        className="rounded-circle w-50"
        variant="top"
        src={img ? img : userPic}
      />
      <Card.Body>
        <div>
          <small className="fw-bold me-3">
            {name ? name : "Unknown User 👽"}
          </small>{" "}
          <small className="text-warning me-2">
            <FontAwesomeIcon icon={faStar} />
          </small>
          <small className="text-secondary">{rating}</small>
        </div>
        <blockquote className="blockquote-footer mt-3">{comment}</blockquote>
      </Card.Body>
    </Card>
  );
};

export default Review;
