import { useState, useEffect } from 'react';

export default function Timer() {
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    const interval = timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    return () => {
      clearInterval(interval)
    }
  }, [timer]);

  const resetTimer = () => {
    setTimer(20);
  }


  return (
    <div className="timer">
      <h2>Stop watch: {timer}</h2>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};