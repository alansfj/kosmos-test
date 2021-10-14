import React from "react";
import "../Sass/AllCustomInputs.styles.scss";

const CustomInput = ({ element }) => {
  const { type, label } = element;

  return (
    <div className="container">
      <label>{label}</label>
      <input type={type} disabled />
    </div>
  );
};

export default CustomInput;
