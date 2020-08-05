import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";
const APIKey = "aeec1f6b19d0406ab75f5182e4799196";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    error: "",
    timezone: "",
  };

  handleChangeInputValue = (e) => {
    this.setState({ value: e.target.value });
  };

  handleCitySubmit = (e) => {
    e.preventDefault();
    const currentAPI = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
    const forecastAPI = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${this.state.value}&appid=${APIKey}&units=metric`;

    fetch(currentAPI)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Fetching error");
      })
      .then((response) => response.json())
      .then((data) => {
        const date = new Date().toLocaleString();
        this.setState((prevState) => ({
          error: false,
          date,
          city: prevState.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          timezone: data.timezone,
        }));
      })
      .catch((err) => {
        console.log(err);
        this.setState((prevState) => ({
          error: true,
          city: prevState.value,
        }));
      });
  };
  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleChangeInputValue}
          submit={this.handleCitySubmit}
        />
        <Result error={this.state.error} weather={this.state} />
      </div>
    );
  }
}

export default App;
