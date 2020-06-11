import React from "react";
import "./Input.css";

const Input = (props) => {
  const { type, className, placeholder, value, onChange } = props;
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default Input;
