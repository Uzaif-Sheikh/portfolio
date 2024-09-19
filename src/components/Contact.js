import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import Animation from "./Animation";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import TagIcon from '@mui/icons-material/Tag';
import "./Contact.css";



export default function Contact() {

    

    const _pelement = useRef(null);

    const onClick = () => {
        _pelement.current.style.backgroundColor = "#0F1624";
        _pelement.current.style.color = "white";
        _pelement.current.style.transition = "0.6s"
        
    }

	return (
		<Animation>
			<>
				<Box className="main-div">
                    <Typography variant="h4" className="about-title">Contact Me</Typography>
                        <div className="cont-des">
                            <Typography variant="h6" className="text">If you have any questions, please feel free to contact me.</Typography>
                        </div>
                    <Box className="contact">
                        
                        <div className="contact-box">
                            <a target="__blank" href="https://www.linkedin.com/in/uzaif-sheikh-29b607187/" className="contact-icon"><LinkedInIcon fontSize="large" style={{margin: "4px"}}/>linkedin.com/in/uzaifs</a>
                        </div>
                        <div className="contact-box">
                            <a target="__blank" href="https://github.com/Uzaif-Sheikh" className="contact-icon"><GitHubIcon fontSize="large" style={{margin: "4px"}}/> github.com/uzaifs</a>
                        </div>
                        <div className="contact-box">
                            <a target="__blank" href="mailto:uzaifsheikh2309@gmail.com" className="contact-icon"><EmailIcon fontSize="large" style={{margin: "4px"}}/> uzaifsheikh2309@gmail.com</a>
                        </div>
                        <div className="contact-box">
                            <a target="__blank" href="https://g.co/kgs/6rLBQh1" className="contact-icon"><TagIcon fontSize="large" style={{margin: "4px"}}/>IRC:</a>
                            <div className="irc-content">
                                <p className="irc-inner">Server: irc.libera.chat</p>
                                <p className="irc-inner">Channel: #msguzaif</p>
                                <p className="irc-inner"><a target="__blank" href="https://www.geekshed.net/2012/03/using-channel-keys/#:~:text=Joining%20a%20Channel,join%20%23channel%20password" style={{color: "white"}}>Command:</a> /join #msguzaif <p ref={_pelement} onClick={onClick} className="hidebeforeClick">talktouzaif</p></p>
                            </div>
                        </div>
                    </Box>
				</Box>
			</>
		</Animation>
	);
}