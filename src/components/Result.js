import React from "react";
import "./Result.css";

const Result = (props) => {
  const {
    error,
    city,
    temp,
    sunrise,
    sunset,
    wind,
    pressure,
    date,
    timezone,
  } = props.weather;

  let content = null;

  const sunriseTime = new Date(
    (sunrise + timezone - 7200) * 1000
  ).toLocaleTimeString();

  const sunsetTime = new Date(
    (sunset + timezone - 7200) * 1000
  ).toLocaleTimeString();

  if (!error && city) {
    content = (
      <>
        <h1>Current weather in {city.toUpperCase()}</h1>
        <h2>Date: {date}</h2>
        <h3>Temperature: {temp} [°C]</h3>
        <h4>Sunrise: {sunriseTime} </h4>
        <h4>Sunset: {sunsetTime} </h4>
        <h4>Pressure: {pressure} [hPa] </h4>
        <h4>Wind: {wind} [m/s] </h4>
      </>
    );
  }
  return (
    <div className="result">
      {error ? `There is no data for ${city}` : content}
    </div>
  );
};

export default Result;
