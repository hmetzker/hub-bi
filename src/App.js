import React from "react";
import AsNavFor from "./components/AsNavFor";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <img src="/images/RIOPREFEITURA_horizontal_branco.png" alt="Logo Prefeitura Rio" className="logo" />
      <h1>BI Hub</h1>
      <AsNavFor />
    </div>
  );
}

export default App;
