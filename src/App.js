import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          Open-source code by{" "}
          <a href="https://github.com/hani-slh/my-react-weather-app">
            Haniye Salehi
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
