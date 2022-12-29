import { useState, useEffect, useRef } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(0);

  const changeTimer = () => {
    setTime((time) => time + 1);
  };

  const startHandler = () => {
    if (timerRef.current) {
      return;
    }

    timerRef.current = setInterval(changeTimer, 1000);
  };
  const pauseHandler = () => {
    let value = time;
    clearInterval(timerRef.current);
    timerRef.current = 0;
    setTime(value);
  };
  const resetHandler = () => {
    clearInterval(timerRef.current);
    setTime(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <>
      <div>Timer: {time}</div>

      <div>
        <button onClick={startHandler}>start</button>
        <button onClick={pauseHandler}>pause</button>
        <button onClick={resetHandler}>reset</button>
      </div>
    </>
  );
}
