import React from "react";
import json from "../assets/fields.json";
import InputOptionToSelect from "./InputOptionToSelect";
import "../Sass/InputOptionGroup.scss";

const InputOptionGroup = ({
  setOptionsSelected,
  optionsSelected,
  setFormArray,
}) => {
  const handleClick = () => {
    const objectEntries = Object.entries(optionsSelected);

    const filteredArray = objectEntries
      .filter(array => array[1] === true)
      .map(array => array[0]);

    setFormArray(filteredArray);
  };

  return (
    <div className="option-group-container">
      <p>Select options to add to form</p>
      {json.fields.map(field => (
        <InputOptionToSelect
          key={field.id}
          field={field}
          setOptionsSelected={setOptionsSelected}
          optionsSelected={optionsSelected}
        />
      ))}
      <button onClick={handleClick}>Create Form</button>
    </div>
  );
};

export default InputOptionGroup;
