import React, { useState } from "react";
import json from "../assets/fields.json";
import AddToFormBtn from "./AddToFormBtn";
import FieldToAdd from "./FieldToAdd";
import "../Sass/FormOptionsGroup.styles.scss";

const FormOptionsGroup = () => {
  const filedsLabelsArray = json.fields.map(field => field.label);

  const fromEntriesArray = filedsLabelsArray.reduce((accu, el) => {
    accu.push([el, false]);
    return accu;
  }, []);

  const stateObj = Object.fromEntries(fromEntriesArray);

  const [formInputsSelected, setFormInputsSelected] = useState(stateObj);

  return (
    <div className="form-options-and-btn-container">
      <p>Select options to create your form</p>
      {json.fields.map(field => (
        <FieldToAdd
          key={field.id}
          label={field.label}
          setFormInputsSelected={setFormInputsSelected}
          formInputsSelected={formInputsSelected}
        />
      ))}
      <AddToFormBtn formInputsSelected={formInputsSelected} />
    </div>
  );
};

export default FormOptionsGroup;
