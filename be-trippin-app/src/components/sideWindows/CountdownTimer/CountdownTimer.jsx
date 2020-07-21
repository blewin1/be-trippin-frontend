import React, { useState, useEffect } from "react";
import "./CountdownTimer.scss";

const CountdownTimer = () => {
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timerStarted, setTimerStarted] = useState(false);
  const [departureDate, setDepartureDate] = useState("");
  const [showCountdownInput, setShowCountdownInput] = useState(false);

  useEffect(() => {
    if (timerStarted) {
      setTimeout(() => {
        getTimeUntil(departureDate);
      }, 1000);
    }
  }, [timer]);

  const handleDateChange = (event) => {
    console.log("handle Date change", event.target.value);
    setInput(event.target.value);
  };

  const handleDateSubmit = (event) => {
    event.preventDefault();
    getTimeUntil(input);
    setDepartureDate(input);
    setInput("");
    setTimerStarted(true);
  };
  console.log("clock time: ", timer);

  const getTimeUntil = (inputTime) => {
    const time = Date.parse(inputTime) - Date.parse(new Date());
    console.log("time", time);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    setTimer({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  const toggleCountdownInput = () => {
    setShowCountdownInput(!showCountdownInput);
  };

  return (
    <div className="countdown-container">
      <button className="departure-button" onClick={toggleCountdownInput}>
        Set Departure: {departureDate}
      </button>

      <div className="countdown-clock">
        <span className="clock-days">{timer.days} days</span>
        <span className="clock-hours">{timer.hours} hours</span>
        <span className="clock-minutes">{timer.minutes} minutes</span>
        <span className="clock-seconds">{timer.seconds} seconds</span>
      </div>
      <div className={`timer-input ${showCountdownInput ? "visible" : ""}`}>
        <form onSubmit={handleDateSubmit}>
          <input
            placeholder="mm/dd/yy"
            onChange={handleDateChange}
            value={input}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CountdownTimer;
