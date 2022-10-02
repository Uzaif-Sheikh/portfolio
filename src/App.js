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
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const location = useLocation();
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <>
      <Navbar />
      <div className="main-contain">
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contactme" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}

        options={{
          "fullScreen": {
            "enable": true,
            "zIndex": -10
          },
          "particles": {
            "number": {
              "value": 25,
              "density": {
                "enable": false,
                "value_area": 1200
              }
            },
            "color": {
              "value": "#111"
            },
            "shape": {
              "type": "circle",
              "options": {
                "sides": 5
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 0.5,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 4,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "rotate": {
              "value": 0,
              "random": true,
              "direction": "clockwise",
              "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 600,
              "color": "#111",
              "opacity": 0.4,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "attract": {
                "enable": false,
                "rotateX": 800,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": ["grab"]
              },
              "onclick": {
                "enable": false,
                "mode": "bubble"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 150,
                "line_linked": {
                  "opacity": 0.8 
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true,
          "background": {
            "color": "",
            "image": "linear-gradient(90deg, rgb(166 79 50), rgb(28 77 124))",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        }}
      />
    </>
  );
}

export default App;
