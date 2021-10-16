import React from "react";
import "../Sass/InputOptionToSelect.styles.scss";

const InputOptionToSelect = ({
  field,
  setOptionsSelected,
  optionsSelected,
}) => {
  const { label } = field;

  const handleClick = () => {
    setOptionsSelected({
      ...optionsSelected,
      [label]: !optionsSelected[label],
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`${optionsSelected[label] ? "option-selected" : ""}`}
    >
      <span>{label}</span>
    </div>
  );
};

export default InputOptionToSelect;
