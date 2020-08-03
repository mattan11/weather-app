import React from "react";

const Result = (props) => {
  const { error, city, temp, sunrise, sunset, wind, pressure } = props.weather;
  return (
    <>
      <h1>Current weather in {city}</h1>
      <div>Temperature: {temp} [°C]</div>
      <div>Sunrise: {sunrise} </div>
      <div>Sunset: {sunset} </div>
      <div>Pressure: {pressure} [hPa] </div>
      <div>Wind {wind} [m/s] </div>
    </>
  );
};

export default Result;
