import React from "react";
import InputToSelect from "./InputToSelect";
import json from "../assets/fields.json";
import { useCreateForm } from "../hooks/useFormState";

const InputsGroup = () => {
  const { createForm } = useCreateForm();

  return (
    <div>
      {json.fields.map(element => (
        <InputToSelect key={element.id} element={element} />
      ))}
    </div>
  );
};

export default InputsGroup;
