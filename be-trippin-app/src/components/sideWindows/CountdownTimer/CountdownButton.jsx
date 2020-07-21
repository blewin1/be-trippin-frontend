import React from "react";
import "./CountdownButton.scss";

const CountdownButton = ({ countdownClickHandler }) => {
  return (
    <>
      <button className="countdown-button" onClick={countdownClickHandler}>
        Countdown
      </button>
    </>
  );
};

export default CountdownButton;
