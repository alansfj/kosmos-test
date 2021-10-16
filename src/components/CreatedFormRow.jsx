import React from "react";
import "../Sass/CreatedFormRow.styles.scss";

const CreatedFormRow = ({ children, setFormArray, formArray, label }) => {
  const handleClick = e => {
    setFormArray(formArray.filter(inputLabel => inputLabel !== label));
  };

  return (
    <div className="form-row-container">
      {children}
      <div className="remove-btn" onClick={handleClick}>
        X
      </div>
    </div>
  );
};

export default CreatedFormRow;
