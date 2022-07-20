import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import LinkIcon from '@mui/icons-material/Link';
import './Home.css';
import Animation from "./Animation";
import ReactTyped from "react-typed";
import Resume from "./document/resume.pdf"



export default function Home() {

	const clickForResume = () => {
		window.open(Resume, "_blank");
	};
	
	return (
		<Animation>
			<>
				<Box className="main-div">
					<Box>
						<Typography variant="subtitle1" className="hi-text">Hey there, I'm</Typography>
						<Typography variant="h1" className="name-text">Uzaif Sheikh</Typography>
					</Box>
                    <Divider className="divider-st"/>
					<Box className="about-container">
						<Typography variant="subtitle1" className="about-text">
						I am a final year computer science student at  University of New South Wales 
						(UNSW) and I enjoy working on software related project, especially those that 
						involve full stack development.
						</Typography>
					</Box>
					<Box className="typed-box">
						<ReactTyped 
							className="typed-class"
							strings={[
								"Computer Science Student.",
								"Fullstack Developer.",
								"Open Source and Blockchain Enthusiast.",
								"Passionate Software Engineer.",
							]}
							typeSpeed={100}
							backSpeed={50}
							loop	
						/>
					</Box>
					<Divider variant="middle"/>
					<Button onClick={clickForResume} variant="contained" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black", "marginTop": "16px"}}><LinkIcon style={{ "transform": "rotate(120deg)" }} />Resume</Button>
				</Box>
			</>
		</Animation>
	);
}