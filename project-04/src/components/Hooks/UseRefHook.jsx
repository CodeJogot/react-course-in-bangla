import React, { useRef } from "react";

export default function TextInputFocus() {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}