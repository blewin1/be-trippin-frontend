import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../../apiConfig";
import "./CountdownTimer.scss";

const CountdownTimer = ({ match }) => {
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
    setInput(event.target.value);
  };

  const handleDateSubmit = (event) => {
    event.preventDefault();
    addDeparture(input);
    getTimeUntil(input);
    setDepartureDate(input);
    setInput("");
    setTimerStarted(true);
    // console.log("countdown match", match)
   };



  const addDeparture = async (date) => {
    date = new Date(date)
    // console.log("date: ", date)
  try{
  const response = await axios.put(`${apiUrl}/trips/${match.params.id}/departureDate/${date}`);
      console.log("added departure date successfully", response.data.departureDate)
  
    } catch(err) {
     console.error(err);
    }
  }


  const getTimeUntil = (inputTime) => {
    const time = Date.parse(inputTime) - Date.parse(new Date());
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
        Departure: {departureDate}
      </button>

      <div className="countdown-clock">
        <span className="clock-days">{timer.days} days</span>
        <span className="clock-hours">{timer.hours} hrs</span>
        <span className="clock-minutes">{timer.minutes} min</span>
        <span className="clock-seconds">{timer.seconds} sec</span>
      </div>
      <div className={`timer-input ${showCountdownInput ? "visible" : ""}`}>
        <form onSubmit={handleDateSubmit}>
        <label htmlFor="date-input"></label>
          <input
            name="date-input"
            placeholder="mm/dd/yy"
            onChange={handleDateChange}
            value={input}
          ></input>
          <button className="timer-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CountdownTimer;
