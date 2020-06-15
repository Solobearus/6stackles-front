import React, { useState, useEffect } from "react";
import "./SignIn.css";
import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { login, verify } from "../../api";
import { userAuthSlice, userDetailsSlice } from "../../store/slices";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input/Input";

const SignIn = ({ from = "/products" }) => {
  const { text } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    token &&
      verify(token)
        .then((res) => history.push(from))
        .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async () => {
    // const result = await login(email, password);
    const result = await login(); //for testing porpuses

    console.log(result);
    if (!result.error) {
      dispatch(userAuthSlice.actions.setToken(result.token));
      history.push(from);
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="signIn" data-testid="signIn">
      {error != "" && <div className="error">error</div>}
      <div className="signIn_welcome">{text.default.sign_in.welcome}</div>
      <Input
        type="text"
        placeholder={text.default.general.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder={text.default.general.password}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        value={text.default.sign_in.submit}
        onClick={() => handleSubmit()}
      />
    </div>
  );
};

export default SignIn;
