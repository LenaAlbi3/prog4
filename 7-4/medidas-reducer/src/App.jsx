import { useState } from "react";

function App() {
  const [mililitros, setMililitros] = useState(0);
  const [centimetros, setCentimetros] = useState(0);
  const [litros, setLitros] = useState(1000);


  const handleMililitrosChange = ({ target }) => {
    const ml = Number(target.value);
    setMililitros(ml);
    setCentimetros(ml);
    setLitros(ml/1000);
  };

  const handleCentimetrosChange = ({ target }) => {
    const cm = Number(target.value);
    setCentimetros(cm);
    setMililitros(cm);
    setLitros(cm/1000);
  };

  const handleLitrosChange = ({ target }) => {
    const lt = Number(target.value);
    setLitros(lt);
    setMililitros(lt * 1000);
    setCentimetros(lt * 1000);
  };

  return (
    <>
      <p>Mililitros: {mililitros.toFixed(2)}ml</p>
      <input
        type="number"
        name="mililitros"
        value={mililitros}
        onChange={handleMililitrosChange}
      />
      <p>⇅</p>
      <input
        type="number"
        name="centimetros"
        value={centimetros}
        onChange={handleCentimetrosChange}
      />
      <p>Centimetros: {centimetros.toFixed(2)}cm3</p>
      <p>⇅</p>
      <input
        type="number"
        name="litros"
        value={litros}
        onChange={handleLitrosChange}
      />
      <p>Litros: {litros}l</p>
    </>
  );
}

export default App;
