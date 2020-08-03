import React from "react";

const Form = ({ value, change, submit }) => {
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={value}
        onChange={change}
        placeholder="Type city name..."
      />
      <button>Check</button>
    </form>
  );
};

export default Form;
