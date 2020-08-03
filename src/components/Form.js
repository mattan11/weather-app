import React from "react";

const Form = ({ value, change }) => {
  return (
    <form>
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
