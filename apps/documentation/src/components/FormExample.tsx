import React, { useState } from "react";
import { Input } from "ui";

export default function FormExample() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="w-full flex flex-col gap-3 justify-center items-center mb-10">
      <Input
        className="w-full"
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
        className="w-1/2"
        placeholder="Contraseña"
        styleType="primary"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    </form>
  );
}
