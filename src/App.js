// @flow
import React from "react";
import logo from "./logo.svg";
import Logo from "./components/Logo/Logo";
import Counter from "./components/Counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo logo={logo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />
      </header>
    </div>
  );
}

export default App;
