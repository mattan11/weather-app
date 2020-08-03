import React from "react";

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

  if (!error && city) {
    const sunriseTime = new Date(
      (sunrise + timezone - 3600) * 1000
    ).toLocaleTimeString();

    const sunsetTime = new Date(
      (sunset + timezone - 3600) * 1000
    ).toLocaleTimeString();

    content = (
      <>
        <h1>Current weather in {city.toUpperCase()}</h1>
        <h2>Date: {date}</h2>
        <h4>Temperature: {temp} [°C]</h4>
        <h4>Sunrise: {sunriseTime} </h4>
        <h4>Sunset: {sunsetTime} </h4>
        <h4>Pressure: {pressure} [hPa]</h4>
        <h4>Wind: {wind} [m/s] </h4>
      </>
    );
  }

  return (
    <div className="result">
      {error ? `There is no ${city} in the database` : content}
    </div>
  );
};

export default Result;
