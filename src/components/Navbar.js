import React, { useEffect, useState } from "react";
import logo from "./letter-u-svgrepo-com.svg"
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Navbar.css'
import AppBar from '@mui/material/AppBar';
import { Link } from "react-router-dom";
import github from "./github.png";
import linkedin from "./linkedin.png"
import notepad from "./notepad.png"
import homeicon from "./home.png"
import work from "./work.png"
import aboutIcon from "./aboutmeicon.png"

export default function Navbar() {
  const [minWind, setminWind] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 950) {
      setminWind(true);
    } else {
      setminWind(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth <= 950) {
      setminWind(true);
    } else {
      setminWind(false);
    }
  }, window);
  

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <AppBar position="static" className="app-bar">
            <div className="flex-centre">
                <div className="display-link">
                <Link to="/home"><img className="logoo" src={logo} alt="u.svg" width="40px" height="40px"></img></Link>
                    { minWind ? <Link className="link-btn" to="/home"><img src={homeicon} width="50px" height="50px"/></Link> : <Link className="link-btn" to="/home"><img src={homeicon} width="50px" height="50px"/>Home</Link>}
                    { minWind ? <Link className="link-btn" to="/projects"><img src={work} width="50px" height="50px"/></Link> : <Link className="link-btn" to="/projects"><img src={work} width="50px" height="50px"/>Projects</Link>}
                    { minWind ? <Link className="link-btn" to="/about"><img src={aboutIcon} width="30px" height="30px"/></Link> : <Link className="link-btn" to="/about"><img src={aboutIcon} width="30px" height="30px" style={{marginRight: "10px"}}/>About Me</Link>}
                    { minWind ? <Link className="link-btn" to="/contactme"><img src={notepad} width="50px" height="50px"/></Link> : <Link className="link-btn" to="/contactme"><img src={notepad} width="50px" height="50px"/>Contact</Link>}
                </div>
            </div>
      </AppBar>
      <AppBar position="static" className="app-bar-below">
        <div className="flex-centre">
          <div className="a-links">
            <a target="__blank" href="https://github.com/Uzaif-Sheikh" className="cont-link"><GitHubIcon fontSize="large" /></a>
            <a target="__blank" href="https://www.linkedin.com/in/uzaif-sheikh-29b607187/" className="cont-link"><LinkedInIcon fontSize="large" /></a>
          </div>
        </div>
      </AppBar>
    </header>
  );
}