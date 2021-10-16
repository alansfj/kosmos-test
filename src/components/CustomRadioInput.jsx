import React from "react";
import "../Sass/CustomRadioInput.styles.scss";

const CustomRadioInput = ({ element }) => {
  const { label, values, type, name } = element;

  return (
    <div className="radio-input-container">
      <p>{label}</p>
      {values.map(value => (
        <label key={value}>
          <input type={type} name={name} />
          {value}
        </label>
      ))}
    </div>
  );
};

export default CustomRadioInput;
