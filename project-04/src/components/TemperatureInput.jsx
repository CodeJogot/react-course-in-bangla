import React from 'react';

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const scaleNames = { c: "Celsius", f: "Fahrenheit" };

  const handleChange = (event) => {
    onTemperatureChange(event.target.value);
  };

  return (
    <div>
      <label>Enter temperature in {scaleNames[scale]}:</label>
      <input value={temperature} onChange={handleChange} />
    </div>
  );
}

export default TemperatureInput;