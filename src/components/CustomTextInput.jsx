import React from "react";
import "../Sass/CustomTextInput.styles.scss";

const CustomTextInput = ({ element }) => {
  const { label, type } = element;

  return (
    <div className="text-input-container">
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} />
    </div>
  );
};

export default CustomTextInput;
