import React, { useRef, useEffect } from "react";
import "./Input.css";
import { Children } from "react";

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
  onBlur = () => {},
  options,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (focus) inputRef.current.focus();
  }, [focus]);

  return (
    <>
      <div className="input_wrapper">
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
          onBlur={() => onBlur()}
          autoFocus
        ></input>
        {options && (
          <div className="input__options">
            {options
              .filter((option) => option.includes(value))
              .map((option) => (
                <option key={option} onClick={() => onChange(option)}>
                  {option}
                </option>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
