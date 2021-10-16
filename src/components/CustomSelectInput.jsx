import React from "react";
import "../Sass/CustomSelectInput.styles.scss";

const CustomSelectInput = ({ element }) => {
  const { label, options } = element;

  return (
    <div className="select-input-container">
      <label htmlFor="select">{label}</label>
      <select id="select">
        <option></option>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelectInput;
