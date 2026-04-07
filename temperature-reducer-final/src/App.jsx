import { useReducer } from "react";

const TYPES = Object.freeze({
  celsius: "celsius",
  fahrenheit: "fahrenheit",
  kelvin: "kelvin",
});

function App() {
  const [state, dispatch] = useReducer(temperatureReducer, {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273.15,
  });

  const handleChange = ({ target }) => {
    const { name: type, value: payload } = target;
    dispatch({ payload, type });
  };

  return (
    <>
      <input
        type="number"
        name={TYPES.celsius}
        value={state.celsius}
        onChange={handleChange}
      />
      <p>Celsius: {state.celsius.toFixed(2)}℃</p>
      <p>⇅</p>
      <input
        type="number"
        name={TYPES.fahrenheit}
        value={state.fahrenheit}
        onChange={handleChange}
      />
      <p>Fahrenheit: {state.fahrenheit.toFixed(2)}℉</p>
      <p>⇅</p>
      <input
        type="number"
        name={TYPES.kelvin}
        value={state.kelvin}
        onChange={handleChange}
      />
      <p>Kelvin: {state.kelvin.toFixed(2)}°K</p>
    </>
  );
}

export default App;

function temperatureReducer(state, action) {
  const { type, payload } = action;
  const K = 273.15;

  switch (type) {
    case TYPES.celsius: {
      const cel = Number(payload);
      return {
        celsius: cel,
        fahrenheit: cel * (9 / 5) + 32,
        kelvin: cel + K,
      };
    }

    case TYPES.fahrenheit: {
      const fah = Number(payload);
      return {
        celsius: (fah - 32) * (5 / 9),
        fahrenheit: fah,
        kelvin: (fah - 32) * (5 / 9) + K,
      };
    }

    case TYPES.kelvin: {
      const kel = Number(payload);
      return {
        celsius: kel - K,
        fahrenheit: (kel - K) * (9 / 5) + 32,
        kelvin: kel,
      };
    }

    default:
      return state;
  }
}
