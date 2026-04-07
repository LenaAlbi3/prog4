import { useId, useState } from "react";

const PERSONA = Object.freeze({
  NOMBRE: "nombre",
  APELLIDO: "apellido",
});

function App() {
  const [persona, setPersona] = useState({
    [PERSONA.NOMBRE]: "",
    [PERSONA.APELLIDO]: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setPersona({ ...persona, [name]: e.target.value });
  };

  return (
    <>
      <h1>Hola wenas!</h1>
      <InputField
        label="Nombre: "
        name={PERSONA.NOMBRE}
        onChange={handleChange}
      />
      <InputField
        label="Apellido: "
        name={PERSONA.APELLIDO}
        onChange={handleChange}
      />

      {persona[PERSONA.NOMBRE] && (
        <p>
          Hola {persona[PERSONA.NOMBRE]}
          {persona[PERSONA.APELLIDO] && ` ${persona[PERSONA.APELLIDO]}`}
        </p>
      )}
    </>
  );
}

export default App;

function InputField({ label, name, onChange }) {
  const id = useId();
  return (
    <section className="mx-auto max-w-56 flex flex-col px-1.5">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={name}
        id={id}
        onChange={onChange}
        className="border rounded-md border-gray-400 outline-blue-400 px-1 text-gray-700"
      />
    </section>
  );
}
