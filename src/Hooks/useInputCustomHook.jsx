import React, { useState } from "react";

function useInputCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    value,
    onchange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, reset, bind];
}

export default useInputCustomHook;
