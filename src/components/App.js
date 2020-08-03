import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";

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
  };

  handleChangeInputValue = (e) => {
    this.setState({ value: e.target.value });
  };

  handleCitySubmit = (e) => {
    e.preventDefault();
    const currentAPI = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=aeec1f6b19d0406ab75f5182e4799196&units=metric`;
    const forecastAPI = `http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${this.state.value}&appid=aeec1f6b19d0406ab75f5182e4799196&units=metric`;

    fetch(currentAPI)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Fetching error");
      })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleChangeInputValue}
          submit={this.handleCitySubmit}
        />
        <Result />
      </div>
    );
  }
}

export default App;
