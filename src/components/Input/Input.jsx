import React, { useRef, useEffect, useState } from "react";
import "./Input.css";
import { Children } from "react";

const Input = ({
  type = "text",
  className,
  placeholder,
  value,
  onChange = () => {},
  id,
  name,
  pattern = "",
  focus = false,
  onFocus,
  onBlur,
  options,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => (onFocus ? onFocus() : setFocused(true));
  const handleBlur = () =>
    onBlur
      ? onBlur()
      : setTimeout(() => {
          setFocused(false);
        }, 0);

  const inputRef = useRef();

  useEffect(() => {
    if (focus) inputRef.current.focus();
  }, [focus]);

  return (
    <>
      <div className={`input_wrapper ${className}`}>
        <input
          ref={inputRef}
          type={type}
          className={`input `}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id={id}
          name={name}
          pattern={pattern}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          autoFocus
        ></input>

        {options && focused && (
          <div className={`input__options`}>
            {options
              .filter((option) => option.includes(value))
              .map((option) => (
                <div
                  className={`input__options__option`}
                  key={option}
                  //TODO: fix workaround that satisfies both on click and onChange
                  onClick={(e) => {
                    e.target.value = option;
                    onChange(e);
                  }}
                >
                  {option}
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
