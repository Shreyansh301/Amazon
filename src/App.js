import React from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./checkout";


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            
            </>
          } />
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
