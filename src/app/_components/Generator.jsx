"use client";

import { useState } from "react";

export const Generator = () => {
  const [hex, setHex] = useState("");
  const [inputValue, setInputValue] = useState("#");
  console.log("inputValue", inputValue);
  console.log("hex", hex);

  const hexGenerator = () => {
    setHex(inputValue);
  };
  const handleOnChange = (e) => {
    return setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="flex gap-2 justify-center mt-2">
        <h1 className="text-2xl text-center mt-1">Color Generator</h1>
        <div className="flex gap-2">
          <input
            value={inputValue}
            onChange={(e) => handleOnChange(e)}
            type="text"
            className="border rounded-sm"
          />
          <button
            onClick={hexGenerator}
            className="bg-[#645dff] text-white p-2 rounded-sm"
          >
            Submit
          </button>
        </div>
      </div>
      <div
        className={`h-[250px] w-[150px]`}
        style={{
          backgroundColor: hex,
        }}
      ></div>
    </div>
  );
};
