import React, { useState } from "react";
import "../../scss/Login/LoginContainer.scss";

import { FiMail } from "react-icons/fi";

export const LoginContainer = () => {
  const [UserInfo, SetUserInfo] = useState({
    Id: "",
    Password: "",
  });

  const onChange = (e) => {
    const NextUserInfo = {
      ...UserInfo,
      [e.target.name]: e.target.value,
    };
    SetUserInfo(NextUserInfo);
  };

  const onSubmit = () => {
    /* 제출 로직 */
    SetUserInfo({
      Id: "",
      Password: "",
    });
  };

  const onRegister = () => {
    /* 페이지 변경 */
  };

  return (
    <div className="LoginContainer_Wrapper">
      <div className="LoginContainer_Logo"></div>
      <div className="LoginContainer_IdSpace">
        <div>Email Address</div>
        <label for="Id">
          <span>
            <FiMail />
          </span>
          <input
            type="email"
            id="Id"
            name="Id"
            value={UserInfo.Id}
            onChange={onChange}
            placeholder="Username@gmail.com"
          />
        </label>
      </div>
      <div className="LoginContainer_PwdSpace">
        <div>Password</div>
        <input
          type="password"
          name="Password"
          value={UserInfo.Password}
          onChange={onChange}
          placeholder="············"
        />
      </div>
      <div className="LoginContainer_Submit">
        <div className="LoginContainer_Login" onClick={onSubmit}>
          Login
        </div>
      </div>
      <div className="LoginContainer_Footer">
        <span>Sign up</span>
        <span>Forgot Password?</span>
      </div>
    </div>
  );
};
