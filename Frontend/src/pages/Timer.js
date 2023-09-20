import React, { useState, useEffect } from 'react';
import "../components/Timer/Timer.css";

export default function Tiempo() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer = null;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          const seconds = prevTime.seconds + 1;
          const minutes = prevTime.minutes + Math.floor(seconds / 60);
          const hours = prevTime.hours + Math.floor(minutes / 60);
          return {
            hours: hours % 24,
            minutes: minutes % 60,
            seconds: seconds % 60
          };
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handlePauseResume = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="timer-container">
      <h1 className="timer-heading">Timer</h1>
      <h2 className="timer-display">
        {formatTime(time.hours)}:{formatTime(time.minutes)}:
        {formatTime(time.seconds)}
      </h2>
      <button className="button" onClick={handlePauseResume}>
        {isRunning ? "Pause" : "Start"}
      </button>
    </div>
  );
}
