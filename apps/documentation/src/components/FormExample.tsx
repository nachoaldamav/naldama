import React, { useState } from "react";
import { Input } from "ui";

export default function FormExample() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  return (
    <form className="w-full flex flex-col gap-3 justify-center items-center">
      <Input
        className="w-full"
        id="test_input"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        className="w-full"
        placeholder="Select a date"
        styleType="secondary"
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
    </form>
  );
}
