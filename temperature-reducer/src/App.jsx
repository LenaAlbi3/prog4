import { useState } from "react";

function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const handleCelsiusChange = ({ target }) => {
    const cel = Number(target.value);
    setCelsius(cel);
    setFahrenheit(cel * (9 / 5) + 32);
  };
  const handleFahrenheitChange = ({ target }) => {
    const fah = Number(target.value);
    setFahrenheit(fah);
    setCelsius((fah - 32) * (5 / 9));
  };

  return (
    <>
      <p>Celsius: {celsius.toFixed(2)}℃</p>
      <input
        type="number"
        name="celsius"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <p>⇅</p>
      <input
        type="number"
        name="fahrenheit"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
      <p>Fahrenheit: {fahrenheit.toFixed(2)}℉</p>
    </>
  );
}

export default App;
