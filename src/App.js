import "./App.css";
import toogle from "./hooks/toogle";
function App() {
  const [isOn, setIsOn] = toogle()
  return (
    <div className="App">
      <h2>Naimur Rahman</h2>

      <button>is active{`${isOn}`}</button>
    </div>
  );
}

export default App;
