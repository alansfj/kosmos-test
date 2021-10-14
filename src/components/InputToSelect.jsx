import React from "react";
import CustomInput from "./CustomInput";
import CustomRadioBtn from "./CustomRadioBtn";
import CustomSelect from "./CustomSelect";

const InputToSelect = ({ element }) => {
  const { type } = element;

  return (
    <div>
      {type === "select" ? (
        <CustomSelect element={element} />
      ) : type === "radio" ? (
        <CustomRadioBtn element={element} />
      ) : (
        <CustomInput element={element} />
      )}
    </div>
  );
};

export default InputToSelect;
