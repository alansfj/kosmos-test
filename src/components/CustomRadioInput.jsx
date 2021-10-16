import React from "react";

const CustomRadioInput = ({ element }) => {
  const { label, values, type, name } = element;

  return (
    <div>
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
