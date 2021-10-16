import React from "react";

const CustomTextInput = ({ element }) => {
  const { label, type } = element;

  return (
    <div className="container">
      <label>{label}</label>
      <input type={type} />
    </div>
  );
};

export default CustomTextInput;
