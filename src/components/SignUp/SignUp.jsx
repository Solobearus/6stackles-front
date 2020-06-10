import React, { useSelector } from "react";
import "./SignUp.css";
import Button from "../_shared/Button/Button";

const SignUp = () => {
  return (
    <div className="signUp" data-testid="signUp">
      <div className="signUp_welcome">Register here</div>
      <input
        type="text"
        className="signUp_input"
        placeholder={`test@test.co.il`}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <input
        type="password"
        className="signUp_input"
        placeholder={`123456`}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Button
        onClick={(e) => {
          console.log("signed up");
        }}
      />
    </div>
  );
};

export default SignUp;
