import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AskJuris from "./pages/AskJuris";
import Welcome from "./pages/Welcome";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Ask Juris Chatbot</h1>
        </header>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/chat" element={<AskJuris />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
