import React, { useRef, useEffect } from "react";
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
  focus = false,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (focus) inputRef.current.focus();
  }, [focus]);

  return (
    <input
      ref={inputRef}
      type={type}
      className={`input ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      pattern={pattern}
      autoFocus
    ></input>
  );
};

export default Input;
