import React from "react";
import { useCreateForm } from "../hooks/useFormState";

const AddToFormBtn = ({ formInputsSelected }) => {
  const { setCreateForm } = useCreateForm();

  const handleClick = () => {
    setCreateForm(formInputsSelected);
  };

  return (
    <div>
      <button onClick={handleClick}>Create Form</button>
    </div>
  );
};

export default AddToFormBtn;
