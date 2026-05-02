import { TimerProvider } from "./context/TimerContext";
import Home from "./pages/Home";
import "./index.css";

function App() {
  return (
    <TimerProvider>
      <Home />
    </TimerProvider>
  );
}

export default App;