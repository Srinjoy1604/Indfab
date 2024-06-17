import { useState } from 'react';
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
function App() {


  return (
    <Router>
    <div style={{overflowX:"hidden"}}>
  

      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/aboutus' Component={AboutUs}></Route>
      </Routes>
    </div>
    </Router>
  )
}

export default App
