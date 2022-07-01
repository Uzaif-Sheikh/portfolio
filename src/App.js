import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router, Link, Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
    <Navbar />
    <div> 
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route path="/home" element={<>Home</>} />
          <Route path="/projects" element={<>Home</>} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/hireme" element={<>Home</>} />
        </Routes>
    </div>
    </>
  );
}

export default App;
