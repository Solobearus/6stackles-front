import React, { useState, useEffect, useCallback } from "react";
import "./SignIn.css";
import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { login, verify } from "../../api";
import { userAuthSlice } from "../../store/slices";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input/Input";

const SignIn = ({ from = "/products" }) => {
  const { text } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("321@ab.cd");
  const [password, setPassword] = useState("a1");
  const [error, setError] = useState("");
  const history = useCallback(useHistory(), []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    token &&
      verify(token)
        .then((res) => history.push(from))
        .catch((err) => console.log(err));
  }, [history, from]);

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
      {error !== "" && <div className="error">error</div>}
      <div className="signIn_welcome">{text.default.sign_in.welcome}</div>
      <Input
        type="text"
        placeholder={text.default.main.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder={text.default.main.password}
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
