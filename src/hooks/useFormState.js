import { useState } from "react";

const useCreateForm = initialForm => {
  const [createform, setCreateForm] = useState({});

  return {
    createform,
    setCreateForm,
  };
};

export { useCreateForm };
