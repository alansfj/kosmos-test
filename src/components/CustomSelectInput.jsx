import React from "react";

const CustomSelectInput = ({ element }) => {
  const { label, options } = element;

  return (
    <div className="container">
      <p>{label}</p>
      <select>
        <option></option>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelectInput;
