import React from "react";
import "../../scss/Register/Register.scss";

import { RegisterContainer } from "./RegisterContainer";

export const Register = () => {
  return (
    <div className="Register_Wrapper">
      <div className="Register_Center">
        <RegisterContainer />
      </div>
    </div>
  );
};
