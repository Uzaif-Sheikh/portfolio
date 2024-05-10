import { div, Button, Divider, Typography } from "@mui/material";
import React from "react";
import LinkIcon from '@mui/icons-material/Link';
import './Home.css';
import Animation from "./Animation";
import ReactTyped from "react-typed";
import Resume from "./document/resume.pdf"
import folder from "./folder.png"



export default function Home() {

	const clickForResume = () => {
		window.open(Resume, "_blank");
	};
	
	return (
		<Animation>
				<div className="main-div-home">
					<div class="terminal_toolbar">
						<div class="butt">
							<button class="btn btn-color"></button>
							<button class="btn"></button>
							<button class="btn"></button>
						</div>
						<p class="user">uzaif@admin: ~</p>
						<div class="add_tab">+</div>
					</div>
					<div>
						<Typography variant="subtitle1" className="hi-text">Hey there, I'm</Typography>
						<Typography variant="h1" className="name-text">Uzaif Sheikh <span class="terminal_location">~ </span>
						<span class="terminal_bling">$</span></Typography>
					</div>
                    <Divider className="divider-st"/>
					<div className="about-container">
						<Typography variant="subtitle1" className="about-text">
						I am a highly motivated Software engineer with a Bachelor's degree
						in Computer Science from the University of New South Wales (UNSW), 
						I am passionate about software development and strive to continuously enhance
						my skills. With a strong collaborative spirit and dedication to delivering high-quality solutions, 
						I am committed to driving impactful projects.
						</Typography>
					</div>
					<div className="typed-box">
						<ReactTyped 
							className="typed-class"
							strings={[
								"Computer Science Student.",
								"Fullstack Developer.",
								"Passionate Software Engineer.",
							]}
							typeSpeed={100}
							backSpeed={50}
							loop	
						/>
					</div>
					<Divider variant="middle"/>
					<button onClick={clickForResume} class="comic-button-home"><div className="fix-button-name"><img src={folder} width="50px" height="50px"/>Resume</div></button>
				</div>
		</Animation>
	);
}