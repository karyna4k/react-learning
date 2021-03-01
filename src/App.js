import logo from "./logo.svg";
import "./App.css";

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">End</a>
        </li>
      </ul>
    </nav>
  );
};

function Technologies() {
  return (
    <ul>
      <li>CSS</li>
      <li>HTML</li>
      <li>JS</li>
      <li>React</li>
    </ul>
  );
};

function App() {
  return (
    <div className="App">
      <Menu />
      <Technologies />
    </div>
  );
}

export default App;
