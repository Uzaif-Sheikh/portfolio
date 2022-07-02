import { Box, Button, Typography } from "@mui/material";
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
						<Typography variant="subtitle1" className="hi-text">Hi there, I'm</Typography>
						<Typography variant="h1" className="name-text">Uzaif Sheikh</Typography>
						
					</Box>
					<Box>
						<Typography variant="subtitle1" className="typed-class"><ReactTyped 
							strings={[
								"Computer Science Student.",
								"Fullstack Developer.",
								"Open Source and Blockchain Enthusiast.",
								"Passionate Software Engineer.",
							]}
							typeSpeed={100}
							backSpeed={50}
							loop	
						/></Typography>
					</Box>
					<Button onClick={clickForResume} variant="contained" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><LinkIcon style={{ "transform": "rotate(120deg)" }} />Resume</Button>
				</Box>
			</>
		</Animation>
	);
}