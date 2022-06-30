import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router, Route,
  Routes,
} from "react-router-dom";
import AboutMe from './components/AboutMe';
function App() {
  return (
    <main>
      <header className="bg-gray-800 md:sticky top-0 z-10">
      <Navbar />
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route exact path="/home" element={<>Home</>} />
          <Route exact path="/projects" element={<>Home</>} />
          <Route exact path="/about" element={<AboutMe />} />
          <Route exact path="/hireme" element={<>Home</>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
