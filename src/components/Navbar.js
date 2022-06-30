import React from "react";
import logo from "./letter-u-svgrepo-com.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import './Navbar.css'
import AppBar from '@mui/material/AppBar';
import {  BrowserRouter as Router, Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

export default function Navbar() {
  return (
    // <header className="bg-gray-800 md:sticky top-0 z-10">
        <AppBar position="static" className="app-bar">
            <div className="flex-centre">
                <div className="display-link">
                <img src={logo} alt="u.svg" width="40px" height="40px"></img>
                <Router>
                    <Link className="link-btn" to="/home"><HomeIcon />Home</Link>
                    <Link className="link-btn" to="/projects"><WorkIcon />Projects</Link>
                    <Link className="link-btn" to="/about"><PersonIcon />About Me</Link>
                    <Link className="link-btn" to="/hireme"><ContactsIcon />Hire Me</Link>
                </Router>    
                </div>
            </div>
        </AppBar>
    // </header>
  );
}