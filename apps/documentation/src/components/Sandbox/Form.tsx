import React from "react";
import SandpackTemplate from "@site/utils/SandPackComponent";

const code = `import "./index.css";
import React, { useState } from "react";
import { Input } from "naldama-ui";

export default function FormExample() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#181622] text-white">
      <form className="w-3/4 mx-auto my-4 flex flex-col gap-3 items-start">
        <Input
          className="form-input w-full"
          id="test_input"
          placeholder="Introduce tu nombre"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          className="w-full"
          placeholder="Selecciona una fecha"
          styleType="primary"
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <Input
          className="w-full focus:border-red-500"
          placeholder="Contraseña"
          styleType="primary"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
`;

export default function Form() {
  return <SandpackTemplate code={code} />;
}
