import Timer from "../components/Timer";
import Controls from "../components/Controls";

const Home = () => {
  return (
    <div className="container">
      <h2 className="title">⏱ Session Timer</h2>

      <Timer />
      <Controls />
    </div>
  );
};

export default Home;