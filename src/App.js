import React from 'react';
import './App.css';
import logo from './pinaka_logo-web-transparent.png'; // Make sure the extension matches your file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Pinakastra Logo" className="App-logo" />
        <h1>Welcome to Pinakastra</h1>
        <p>Building India's Private Cloud Infrastructure</p>
      </header>
    </div>
  );
}

export default App;
