import { useTimer } from "../context/TimerContext";

const Controls = () => {
  const { startTimer, stopTimer, resetTimer, isRunning } = useTimer();

  return (
    <div className="controls">
      <button className="start" onClick={startTimer}>
        ▶ Start Session
      </button>

      <button className="stop" onClick={stopTimer}>
        ⏹ Stop
      </button>

      <button className="clear" onClick={resetTimer}>
        ❌ Clear
      </button>
    </div>
  );
};

export default Controls;