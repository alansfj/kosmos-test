import React, { useState } from "react";
import "../Sass/CustomTextInput.styles.scss";

const CustomTextInput = ({ element }) => {
  const [input, setInput] = useState("");

  const { label, type } = element;

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <div className="text-input-container">
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} onChange={handleChange} value={input} />
    </div>
  );
};

export default CustomTextInput;
