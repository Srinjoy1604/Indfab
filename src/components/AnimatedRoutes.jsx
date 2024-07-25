import React from "react";
import { BrowserRouter as Router, Route, Link, Routes ,useLocation} from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Manufacturing_Unit from '../pages/ManufacturingUnit';
import Certificate from '../pages/Certificate';
import QualitySafety from '../pages/Q&S';
import ProductsServices from '../pages/Products&Services';
import Clients from '../pages/Clients';
import Contact from '../pages/ContactUs';
import Meramandali from '../pages/Meramandali';
import Nalconagar from '../pages/Nalconagar';
import {AnimatePresence} from "framer-motion";
function AnimatedRoutes() {
    const location= useLocation();
    return (
        
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' Component={Home}></Route>
                <Route path='/aboutus' Component={AboutUs}></Route>
                <Route path='/manufacturing_unit' Component={Manufacturing_Unit}></Route>
                <Route path='/certificate' Component={Certificate}></Route>
                <Route path='/QualitySafety' Component={QualitySafety}></Route>
                <Route path='/productsservices' Component={ProductsServices}></Route>
                <Route path='/clients' Component={Clients}></Route>
                <Route path='/contact' Component={Contact}></Route>
                <Route path='/MSME1' Component={Meramandali}></Route>
                <Route path='/MSME2' Component={Nalconagar}></Route>
            </Routes>
        </AnimatePresence>

    );
}

export default AnimatedRoutes;