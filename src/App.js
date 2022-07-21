import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {
  Route, Routes, useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from "./components/Contact";

function App() {
  const location = useLocation();
  return (
    <>
    <Navbar />
    <div className="main-contain"> 
      <AnimatePresence exitBeforeEnter> 
        <Routes key={location.pathname} location={location}>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contactme" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
    </>
  );
}

export default App;
