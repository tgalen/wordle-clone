import "./App.css";
import Header from "./components/Header";
import Puzzle from "./components/Puzzle";
import Keyboard from "./components/Keyboard";

const divStyle = {
  backgroundColor: "lightgray",
  height: "100%",
  width: "100%",
};

function App() {
  return (
    <div style={divStyle}>
      <Header />
      <Puzzle />
      <Keyboard />
    </div>
  );
}

export default App;
