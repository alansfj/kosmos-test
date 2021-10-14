import React from "react";
import "../Sass/AllCustomInputs.styles.scss";

const CustomSelect = ({ element }) => {
  return (
    <div className="container">
      <p>{element.label}</p>
      <select disabled>
        <option></option>
        {element.options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
