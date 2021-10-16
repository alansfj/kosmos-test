import React from "react";
import "../Sass/CreatedFormRow.styles.scss";

const CreatedFormRow = ({ children, setFormArray, formArray, label }) => {
  const handleClick = e => {
    setFormArray(formArray.filter(inputLabel => inputLabel !== label));
  };

  return (
    <div className="form-row-container">
      {children}
      <button onClick={handleClick}>X</button>
    </div>
  );
};

export default CreatedFormRow;
