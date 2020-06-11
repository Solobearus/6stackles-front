import React, { useState } from "react";
import "./SignUp.css";
import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import { register } from "../../store/async";
import { userAuthSlice } from "../../store/slices";

const SignUp = () => {
  const { text } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const checkPassword = () => {};

  const handleSubmit = async () => {
    const result = await register(email, password, phone);
    dispatch(userAuthSlice.actions.setToken(result.token));
  };
  return (
    <div className="signUp" data-testid="signUp">
      <div className="signUp_welcome">{text.sign_up.welcome}</div>
      <Input
        type="text"
        placeholder={text.general.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder={text.general.password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Input
        type="text"
        placeholder={text.general.repeat_password}
        onChange={(e) => {
          checkPassword(e.target.value);
        }}
      />
      <Input
        type="tel"
        pattern="[0-9]{3} [0-9]{2}-[0-9]{3}-[0-9]{4}"
        placeholder={text.general.phone_format}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />

      <Button
        value={text.sign_up.submit}
        onClick={() => {
          console.log("signed up");
          handleSubmit();
        }}
      />
    </div>
  );
};

export default SignUp;
