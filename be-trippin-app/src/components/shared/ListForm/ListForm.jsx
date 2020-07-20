import React, { useState } from "react";

const ListForm = ({ handlePackListSubmit }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    console.log("handle change", event.target.value);
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePackListSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="list"></label>
      <input type="text" onChange={handleChange} value={input} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ListForm;
