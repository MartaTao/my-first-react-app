import { useState } from "react";
export default function Input({ val, disabled, inputRef, name }) {
  const [value, setValue] = useState(val);
  return (
    <input
      type="text"
      name={name}
      ref={inputRef}
      value={value}
      disabled={disabled}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
