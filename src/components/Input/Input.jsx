import React from "react";
import "./Input.css";

const Input = ({
  type = "text",
  className = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  id = "",
  name = "",
  pattern = "",
}) => {

  console.log(`input ${className}`)
  return (
    <input
      type={type}
      className={`input ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      pattern={pattern}
    ></input>
  );
};

export default Input;
