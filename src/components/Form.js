import React from "react";
import "./Form.css";

const Form = ({ value, change, submit }) => {
  return (
    <>
      <div className="form">
        <h1 className="title">Weather App</h1>
        <form onSubmit={submit}>
          <input
            type="text"
            value={value}
            onChange={change}
            placeholder="Type city name..."
          />
          <button>Check</button>
        </form>
      </div>
    </>
  );
};

export default Form;
