import './App.css'
import './index.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>
      </React.StrictMode>
    </Router>
  );
}

export default App
