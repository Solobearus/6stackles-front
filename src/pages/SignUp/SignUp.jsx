import React, { useState } from "react";
import "./SignUp.css";
import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
// import { register } from "../../store/async";

const SignUp = () => {
  const { text } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signUp" data-testid="signUp">
      <div className="signUp_welcome">
        <p>{text.sign_up.welcome[0]}</p>
        <p>{text.sign_up.welcome[1]}</p>
      </div>
      <input
        type="text"
        className="signUp_input"
        placeholder={text.general.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="signUp_input"
        placeholder={text.general.password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Button
        value={text.sign_up.submit}
        onClick={async () => {
          // const result=await register(param,param,param)
          // dispatch(userAuthSlice.actions.setToken(result.token))
          console.log("signed up");
        }}
      />
    </div>
  );
};

export default SignUp;
