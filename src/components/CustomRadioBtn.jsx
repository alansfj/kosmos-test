import React from "react";
// import json from '../assets/fields.json'
import "../Sass/AllCustomInputs.styles.scss";

const CustomRadioBtn = ({ element }) => {
  return (
    <div className="container">
      <p>{element.label}</p>
      {element.values.map(value => (
        <label key={value}>
          <input type={element.type} name={element.name} disabled />
          {value}
        </label>
      ))}
    </div>
  );
};

export default CustomRadioBtn;
