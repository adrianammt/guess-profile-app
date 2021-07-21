import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <h1>Guess your ""</h1>
      </header>
      <main className="App-Content">
        <form className="App-Form">
          <input type="text" id="nameInput" name="nameInput" />
          <button className="App-Form__Submit" type="submit">
            Submit
          </button>
        </form>
        <section>
          <p>Age:</p>
          <p>Nationality:</p>
          <p>Gender:</p>
        </section>
      </main>
      <footer className="App-Footer">
        <div className="App-Footer__Options">
          <button>Age</button>
          <button>Nationality</button>
          <button>Gender</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
