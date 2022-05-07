import React from "react";
import { Alert, Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import Loading from "../../Shared/Loading/Loading";
import google from "../../../Images/google.png";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  if (loading) {
    return <Loading />;
  }
  if (error) {
    errorElement = (
      <Alert variant="danger">This is a {error?.message} — check it out!</Alert>
    );
  }

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-dark w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "2px" }} className="bg-dark w-50"></div>
      </div>
      {errorElement}
      <div>
        <Button
          onClick={() => signInWithGoogle()}
          variant="light"
          className="btn btn-sm btn-outline-dark d-block mx-auto"
        >
          <img
            style={{
              width: "30px",
            }}
            src={google}
            alt=""
          />
          <span className="px-3">Sign In With Google</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
