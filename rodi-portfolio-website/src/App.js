import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage.tsx";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" />
          <Route path="/portfolio" />
          <Route path="/contact" />
        </Routes>
      </Router>
      <div className="App"></div>
    </>
  );
}

export default App;
