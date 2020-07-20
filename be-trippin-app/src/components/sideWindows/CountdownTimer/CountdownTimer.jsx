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

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       console.log("This will run every second!");
  //       setClock();
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);

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
    // console.log("handle date submit");
    // console.log("input date", new Date(input));
    // console.log("current date", new Date());
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

  return (
    <div className="timer">
      <p>Countdown Until Departure Date: </p>
      <p>{departureDate}</p>
      <div className="clock-days">{timer.days} days</div>
      <div className="clock-hours">{timer.hours} hours</div>
      <div className="clock-minutes">{timer.minutes} minutes</div>
      <div className="clock-seconds">{timer.seconds} seconds</div>
      <div className="timer-input">
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
