import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" />
          <Route path="/home" />
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
