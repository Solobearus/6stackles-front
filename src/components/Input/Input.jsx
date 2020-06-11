import React from "react";
import "./Input.css";

const Input = (props) => {
  const {
    type,
    className,
    placeholder,
    value,
    onChange,
    id,
    name,
    pattern,
  } = props;
  return (
    <input
      type={type}
      className={className}
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
