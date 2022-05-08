import React from "react";
import { Alert, Button, Container } from "react-bootstrap";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { SpinnerRoundOutlined } from "spinners-react";
import auth from "../../../Firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0].providerId === "password" && !user.emailVerified) {
    return (
      <Container className="w-75 mt-5">
        <Alert variant="danger">
          <Alert.Heading>Your Email Is Not Verified !</Alert.Heading>
          <p>
            Please Verify Your Email Address .{" "}
            <span>
              <SpinnerRoundOutlined
                size={80}
                thickness={180}
                speed={81}
                color="#36ad47"
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
      </Container>
    );
  }
  return children;
};

export default RequireAuth;
