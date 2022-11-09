import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import "../../scss/Register/RegisterContainer.scss";

export const RegisterContainer = () => {
  const [RegisterInfo, SetRegisterInfo] = useState({
    Id: "",
    Password: "",
    Name: "",
    NickName: "",
  });

  const onChange = (e) => {
    const NextReigsterInfo = {
      ...RegisterInfo,
      [e.target.name]: e.target.value,
    };
    SetRegisterInfo(NextReigsterInfo);
  };

  const onSubmit = () => {
    /* 제출 로직 */
    SetRegisterInfo({
      Id: "",
      Password: "",
      Name: "",
      NickName: "",
    });
  };

  return (
    <div className="RegisterContainer_Wrapper">
      <div className="RegisterContainer_Logo"></div>
      <div className="RegisterContainer_IdSpace">
        <div style={{ fontSize: "0.9em", color: "gray" }}>Email Address</div>
        <label for="Id">
          <span>
            <FiMail />
          </span>
          <input
            type="eamil"
            id="Id"
            name="Id"
            value={RegisterInfo.Id}
            onChange={onChange}
            placeholder="Username@gmail.com"
          ></input>
        </label>
      </div>
      <div className="RegisterContainer_PwdSpace">
        <div style={{ fontSize: "0.9em", color: "gray" }}>Password</div>
        <input
          type="password"
          name="Password"
          value={RegisterInfo.Password}
          onChange={onChange}
          placeholder="············"
        ></input>
      </div>
      <div className="RegisterContainer_NameSpace">
        <div style={{ fontSize: "0.9em", color: "gray" }}>Name</div>
        <input
          type="text"
          name="Name"
          value={RegisterInfo.Name}
          onChange={onChange}
          placeholder="이름"
        ></input>
      </div>
      <div className="RegisterContainer_NickNameSpace">
        <div style={{ fontSize: "0.9em", color: "gray" }}>NickName</div>
        <input
          type="text"
          name="NickName"
          value={RegisterInfo.NickName}
          onChange={onChange}
          placeholder="닉네임"
        ></input>
      </div>

      <div className="RegisterContainer_Submit">
        <div className="RegisterContainer_Login" onClick={onSubmit}>
          Register
        </div>
      </div>
    </div>
  );
};
