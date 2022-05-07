import React from "react";
import { SpinnerInfinity } from "spinners-react";

const Loading = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center my-5 text-warning">
      <SpinnerInfinity size={150} color="dark" speed={100} />
    </div>
  );
};

export default Loading;
