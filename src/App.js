import React from "react";
import AsNavFor from "./components/AsNavFor";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://transportes.prefeitura.rio/" target="_blank" rel="noopener noreferrer">
          <img src="/images/RIOPREFEITURA_horizontal_branco.png" alt="Logo Prefeitura Rio" className="App-logo" />
        </a>
        <h1>Central de BI's</h1>
      </header>
      <AsNavFor />
    </div>
  );
}

export default App;