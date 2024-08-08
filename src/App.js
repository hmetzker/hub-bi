import React from "react";
import AsNavFor from "./components/AsNavFor";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/RIOPREFEITURA_horizontal_branco.png" alt="Logo Prefeitura Rio" className="App-logo" />
        <h1>BI Hub</h1>
      </header>
      <AsNavFor />
    </div>
  );
}

export default App;