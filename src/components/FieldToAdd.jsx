import React from "react";
import "../Sass/FieldsToAdd.styles.scss";

const FieldToAdd = ({ setFormInputsSelected, formInputsSelected, label }) => {
  const handleClick = e => {
    setFormInputsSelected({
      ...formInputsSelected,
      [label]: !formInputsSelected[label],
    });
  };

  const stateObj = { ...formInputsSelected };

  return (
    <div
      className={`field-to-add-container ${
        stateObj[label] ? "field-selected" : ""
      }`}
      onClick={handleClick}
    >
      <div className="field">
        <p>{label}</p>
      </div>
    </div>
  );
};

export default FieldToAdd;
