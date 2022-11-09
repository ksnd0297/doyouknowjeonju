import React from "react";
import "../../scss/Login/Login.scss";

import { LoginContainer } from "./LoginContainer";

export const Login = () => {
  return (
    <div className="Login_Wrapper">
      <div className="Login_Center">
        <LoginContainer />
      </div>
    </div>
  );
};
