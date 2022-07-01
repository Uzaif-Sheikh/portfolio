import React, { useEffect, useState } from "react";
import logo from "./letter-u-svgrepo-com.svg"
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import './Navbar.css'
import AppBar from '@mui/material/AppBar';
import {  BrowserRouter as Router, Link} from "react-router-dom";
import { Button, Typography } from "@mui/material";

export default function Navbar() {
  const [minWind, setminWind] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 950) {
      setminWind(true);
    } else {
      setminWind(false);
    }
  });

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <AppBar position="static" className="app-bar">
            <div className="flex-centre">
                <div className="display-link">
                <img className="logoo" src={logo} alt="u.svg" width="40px" height="40px"></img>
                    { minWind ? <Link className="link-btn" to="/home"><HomeIcon /></Link> : <Link className="link-btn" to="/home"><HomeIcon />Home</Link>}
                    { minWind ? <Link className="link-btn" to="/projects"><WorkIcon /></Link> : <Link className="link-btn" to="/projects"><WorkIcon />Projects</Link>}
                    { minWind ? <Link className="link-btn" to="/about"><PersonIcon /></Link> : <Link className="link-btn" to="/about"><PersonIcon />About Me</Link>}
                    { minWind ? <Link className="link-btn" to="/hireme"><ContactsIcon /></Link> : <Link className="link-btn" to="/hireme"><ContactsIcon />Hire Me</Link>}
                </div>
            </div>
      </AppBar>
    </header>
  );
}