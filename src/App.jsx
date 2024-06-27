import { useState } from 'react';
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Manufacturing_Unit from './pages/ManufacturingUnit';
function App() {


  return (
    <Router>
    <div style={{overflowX:"hidden"}}>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/aboutus' Component={AboutUs}></Route>
        <Route path='/manufacturing_unit' Component={Manufacturing_Unit}></Route>
      </Routes>
    </div>
    </Router>
  )
}

export default App
