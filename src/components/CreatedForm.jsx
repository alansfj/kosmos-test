import React from "react";
import json from "../assets/fields.json";
import CreatedFormRow from "./CreatedFormRow";
import CustomRadioInput from "./CustomRadioInput";
import CustomSelectInput from "./CustomSelectInput";
import CustomTextInput from "./CustomTextInput";

const CreatedForm = ({ formArray, setFormArray }) => {
  const filteredArray = json.fields.filter(
    field => formArray.indexOf(field.label) > -1
  );

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {filteredArray.map(element => {
          if (element.type === "radio") {
            return (
              <CreatedFormRow
                key={element.id}
                setFormArray={setFormArray}
                formArray={formArray}
                label={element.label}
              >
                <CustomRadioInput element={element} />
              </CreatedFormRow>
            );
          } else if (element.type === "select") {
            return (
              <CreatedFormRow
                key={element.id}
                setFormArray={setFormArray}
                formArray={formArray}
                label={element.label}
              >
                <CustomSelectInput element={element} />
              </CreatedFormRow>
            );
          } else {
            return (
              <CreatedFormRow
                key={element.id}
                setFormArray={setFormArray}
                formArray={formArray}
                label={element.label}
              >
                <CustomTextInput element={element} />
              </CreatedFormRow>
            );
          }
        })}
        {formArray.length > 0 ? <input type="submit" value="Submit" /> : null}
      </form>
    </div>
  );
};

export default CreatedForm;
