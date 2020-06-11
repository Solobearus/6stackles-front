import React, { useState } from "react";
import "./SignIn.css";
import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/async";
import { userAuthSlice, userDetailsSlice } from "../../store/slices";
import Input from "../../components/Input/Input";

const SignIn = () => {
  const { text } = useSelector((state) => state.language);
  const { token } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const result = await login(email, password);
    dispatch(userAuthSlice.actions.setToken(result.token));
  };

  return (
    <div className="signIn" data-testid="signIn">
      {token && token}
      <div className="signIn_welcome">{text.sign_in.welcome}</div>
      <Input
        type="text"
        placeholder={text.general.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder={text.general.password}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button value={text.sign_in.submit} onClick={() => handleSubmit()} />
    </div>
  );
};

export default SignIn;
