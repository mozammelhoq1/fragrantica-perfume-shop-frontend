import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form, Modal } from "react-bootstrap";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import Slider from "react-slick/lib/slider";
import { SpinnerRoundOutlined } from "spinners-react";
import auth from "../../../../Firebase.init";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [update, setUpdate] = useState(true);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [user] = useAuthState(auth);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleComment = (e) => {
    e.preventDefault();
    if (!user.emailVerified) {
      return user;
    }
    const email = user?.email;
    const name = user?.displayName;
    const img = user?.photoURL;
    const comment = e.target.comment.value;
    const rating = parseInt(e.target.rating.value);
    if (rating <= 0 || rating > 5) {
      toast.error("Please fullfil the requirement");
      return;
    }
    const review = {
      email,
      name,
      img,
      comment,
      rating,
    };

    const url = `https://arcane-sea-21908.herokuapp.com/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Thanks For Your Review");
        e.target.reset();
        setUpdate(!update);
        console.log(data);
      });
  };
  useEffect(() => {
    fetch("https://arcane-sea-21908.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user, update]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,

        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container fluid className="my-5 mx-auto">
      <Container>
        <h1 className="text-center my-5">
          <span className=" border-dark border-bottom border-5 pb-3">
            Testimonials
          </span>
        </h1>
        <Container>
          <Slider {...settings}>
            {/* <Row xs={1} md={2} lg={3} xl={4} className="g-4"> */}
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
            {/* </Row> */}
          </Slider>
        </Container>
      </Container>
      <Container className="mt-5 p-3 rounded-3 shadow-none bg-light">
        <Toaster />
        <h1 className="text-center mb-5">Please Drop Your Feedback </h1>
        <Form onSubmit={handleComment}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              placeholder="Write here ..."
              rows={3}
              required
              name="comment"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="number"
              placeholder="Please Add Your Rating 1 - 5"
              required
              name="rating"
            />
          </Form.Group>

          {user?.providerData[0].providerId === "password" &&
          !user.emailVerified ? (
            <>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton />
                <Alert variant="danger">
                  <Alert.Heading>Your Email Is Not Verified !</Alert.Heading>
                  <p>
                    Please Verify Your Email Address .{" "}
                    <span>
                      <SpinnerRoundOutlined
                        size={80}
                        thickness={180}
                        speed={81}
                        color="000000"
                      />
                    </span>
                  </p>
                  <hr />
                  <Button
                    onClick={async () => {
                      await sendEmailVerification();
                      toast.success("Sent Verification sms");
                    }}
                    variant="light"
                    className="btn btn-sm btn-outline-dark"
                  >
                    Send Verification
                  </Button>
                </Alert>
                <Toaster />
              </Modal>
              <Button
                onClick={handleShow}
                className="btn btn-outline-dark"
                variant="light"
                type="submit"
                style={{ height: "40px" }}
              >
                SUBMIT <FontAwesomeIcon className="ms-2" icon={faMessage} />
              </Button>
            </>
          ) : (
            <Button
              className="btn btn-outline-dark"
              variant="light"
              type="submit"
              style={{ height: "40px" }}
            >
              SUBMIT <FontAwesomeIcon className="ms-2" icon={faMessage} />
            </Button>
          )}
        </Form>
      </Container>
    </Container>
  );
};

export default Reviews;
