import React, { useRef, useState } from "react";
export default function RefExample() {
  const refInput = useRef();
  const [color, setColor] = useState({ background: "" });

  const handleInputChange = (e) => {
    setColor((current) => ({ ...current, background: e.target.value }));
  };
  return (
    <div>
      <input
        type="text"
        ref={refInput}
        onChange={handleInputChange}
        style={{ backgroundColor: color.background }}
      />
    </div>
  );
}

