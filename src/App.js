import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Notifications from "./components/dashboard/Notifications";
function App() {
  return (
      <BrowserRouter>
          <div className="App">
              {/*Redux Firebase App*/}
              <Navbar />
              <Notifications />
              {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    */}
          </div>
      </BrowserRouter>
  );
}

export default App;
