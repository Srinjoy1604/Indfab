import { useState } from 'react';
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes ,useLocation} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Manufacturing_Unit from './pages/ManufacturingUnit';
import Certificate from './pages/Certificate';
import QualitySafety from './pages/Q&S';
import ProductsServices from './pages/Products&Services';
import Clients from './pages/Clients';
import Contact from './pages/ContactUs';
import Meramandali from './pages/Meramandali';
import Nalconagar from './pages/Nalconagar';
import ScrollToTop from './components/ScrollToTop';
import AnimatedRoutes from './components/AnimatedRoutes';
function App() {
  

  return (
    <Router>
      <div style={{ overflowX: "hidden" }}>
          <AnimatedRoutes />
      </div>
      <ScrollToTop />
    </Router>
  )
}

export default App
