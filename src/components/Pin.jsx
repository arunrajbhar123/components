import PropTypes from "prop-types";
import { useState, useRef } from "react";
const Pin = ({ length, onChange }) => {
  const inputRef = useRef([]);

  const [inputBoxLen] = useState(new Array(length).fill(1));
  const [inputValue, setInputValue] = useState(new Array(length).fill(""));
  const handleInput = (e, index) => {
    inputValue[index] = e.target.value;
    setInputValue(inputValue);
    if (e.target.value > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    onChange(inputValue.join(""));
  };
  const handleKeyAction = (e, i) => {
    inputValue[i] = e.target.value;
    setInputValue(inputValue);
    if (e.keyCode === 8 || e.keyCode === 46) {
      handleBackSpace(e, i);
      inputValue[i] = e.target.value = "";
      setInputValue(inputValue);
    } else {
      handleInput(e, i);
    }
  };

  const handleBackSpace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    onChange(inputValue.join(""));
  };
  const handleOnPaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);
    data.forEach((value, index) => {
      inputValue[index] = value;
      inputRef.current[index].value = value;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };
  return (
    <div onPaste={handleOnPaste} style={{background:"grey",width:"20%",margin:"0.5rem auto",borderRadius:"5px",padding:"2rem"}}>
      {inputBoxLen.map((el, index) => {
        return (
          <input
            ref={(element) => {
              inputRef.current[index] = element;
            }}
            key={index}
            maxLength={1}
            onKeyUp={(e) => handleKeyAction(e, index)}
          />
        );
      })}
    </div>
  );
};
export default Pin;

Pin.propTypes = {
  length: PropTypes.number,
  onChange: PropTypes.func,
};
