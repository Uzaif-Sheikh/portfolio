import React, { useState } from "react";
import logo from "./letter-u-svgrepo-com.svg"
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import './Navbar.css'
import AppBar from '@mui/material/AppBar';
import { Link } from "react-router-dom";

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
                    { minWind ? <Link className="link-btn" to="/hireme"><ContactsIcon /></Link> : <Link className="link-btn" to="/contactme"><ContactsIcon />Contact</Link>}
                </div>
            </div>
      </AppBar>
      <AppBar position="static" className="app-bar-below">
        <div className="flex-centre">
          <div className="a-links">
            <a target="__blank" href="https://github.com/Uzaif-Sheikh" className="cont-link"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFlSURBVHgBvVWBcYMwDBS5DOARvEEZgQ06QrNBu0GyQboB3YDrBLAB3QA6Ae0Eqijvi3BsSkwvf6czJ70sWZYFkQdmfuMJrciziKUFiN2IHEU6+D0ukS1fY3QssQ7QDUigUjoNGwtQgFDju+Z1cPzKP8Xei2GwfmdZ1sjaCPkA3YdIL/qvsSzybUVy6BokeHT+sRPkrgSUAFWuIkaoQSgpAXxpkDpkzNWlWkoATx3lTjGWj3bKXmBtpKY9JWC8H1ne9X46gLvgT9qGXu+3CxAM/SN2gciWtuEBazvT8uUVD+jzm4E9huhrVm16pgTwNJPCbQpCrp5/ubZd0Z5n5WuXyAe+njMn/3Vi9rzyfF4NarTMyB3kCXW06lU6dAEfP5E8lnXnZVGqQC30J8/nxQXmNU2B43IgKwfj8Y0z0FrwwvyP8G8OYAK13xQgizhamn4mI6pfoiAUIGZbja0n2NPf6BNt98EPhkCcev4CLWsAAAAASUVORK5CYII=" /></a>
            <a target="__blank" href="https://www.linkedin.com/in/uzaif-sheikh-29b607187/" className="cont-link"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADcSURBVHgB7ZSBDYMwDAStqgMwAqOwCSO0G5AN2g3oJh2BEcIGjODGqlEdalcQpSAkTrIUxyEfOw4Aa4GITbCB7QY5oQ3xGwe54FMTJRsxQAZOsAZUDqVEd8gJbSgu2cFWBPGCO86LbLtgLd2f9ZFXSuSVdbVoCA2KXTUBlcmaiwg9g1WUDcdo/BDxWhX44Zf4ObkDu3xOZFIsERhP14q5BpWXz9nFB5kh0PFUxb758rlchF8iMPXNl4/vLovWpwjM9v/+qzgEthc4SydqLYWU+JhBr6zvjXFKfMe8AJJcFZ/njRUFAAAAAElFTkSuQmCC" /></a>
            <a target="__blank" href="https://twitter.com/UzaifSheikh4" className="cont-link"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFaSURBVHgB5VTtUcMwDFU4BsgI3oBsQDaADVImgA3ICGWCZIOygWGCwATuBrCBkS7SIXT+SOnPvjudE0vWe5KjAFwkYowObUL7iisCvzv292ijPUSbA1pbST6oxBa079W718kFU0W5JN8rxR3anCCc5ODeOA5y2BDMJRG4v0NbVDVOHJ43R+6n9HXQLVPqXYagVSKftENYO27DwVTkdZVQQDJGqXamXB8TOIXgOhfYNM2My8ykHRshFJI7fjxah7RkB2cg/n6NXvaueH3n9Q7Owz2vn5ZZ376Df0LdZZ9yyleyxMo0Z5JLe0IuoFUKllMrUWeHUpCLZtBgW/LnovoEiVd3Eirxjyq2LwVSizo+sIlAKSeMuaAQ06D/zpi6cL5QX00O+Ul+RXuBdSJbJqFJvkHr2YD9Dzj1b1BC/Pub3YJsdRaNISKVt6zQkXrlPsI6oVTdB6r+hovADzRItyqQUUsMAAAAAElFTkSuQmCC" /></a>
          </div>
        </div>
      </AppBar>
    </header>
  );
}