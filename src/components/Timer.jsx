import { useTimer } from "../context/TimerContext";

const Timer = () => {
  const { time } = useTimer();

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      {formatTime(time)}
    </div>
  );
};

export default Timer;