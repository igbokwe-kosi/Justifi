
import React from "react";
import Chatbot from "./Chatbot";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Juris Chatbot</h1>
        <p>Ask Juris your questions, and get instant responses!</p>
      </header>
      <Chatbot />
    </div>
  );
}

export default App;
