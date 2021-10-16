import React, { useState } from "react";
import "../Sass/CustomSelectInput.styles.scss";

const CustomSelectInput = ({ element }) => {
  const [input, setInput] = useState("");

  const { label, options } = element;

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <div className="select-input-container">
      <label htmlFor="select">{label}</label>
      <select id="select" onChange={handleChange}>
        <option></option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelectInput;
