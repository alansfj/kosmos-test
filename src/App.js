import { useEffect, useState } from "react";
import InputOptionGroup from "./components/InputOptionGroup";
import json from "./assets/fields.json";
import CreatedForm from "./components/CreatedForm";

function App() {
  const [optionsSelected, setOptionsSelected] = useState({});
  const [formArray, setFormArray] = useState([]);

  useEffect(() => {
    const selectedOptionsInitialState = json.fields.reduce((accu, field) => {
      accu[field.label] = false;
      return accu;
    }, {});

    setOptionsSelected(selectedOptionsInitialState);
  }, []);

  return (
    <div className="App">
      <InputOptionGroup
        setOptionsSelected={setOptionsSelected}
        optionsSelected={optionsSelected}
        setFormArray={setFormArray}
      />
      <CreatedForm formArray={formArray} setFormArray={setFormArray} />
    </div>
  );
}

export default App;
