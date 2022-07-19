import React from "react";
import { Box, Typography, Button, TextareaAutosize } from "@mui/material";
import Animation from "./Animation";
import "./Contact.css";

export default function Contact() {

	return (
		<Animation>
			<>
				<Box className="main-div">
                    <Typography variant="h4" className="about-title">Contact Me</Typography>
                        <div className="cont-des">
                            <Typography variant="h6" className="text">If you have any questions, please feel free to contact me.</Typography>
                        </div>
                    <Box component="form" className="contact">
                        <form action="https://getform.io/f/1831234b-52bd-49ad-b294-98c4178be6ed" method="POST">
                            <Box className="input-flex">
                                <input className="text-form" name="Name" placeholder="Name"></input>
                                <input className="text-form" name="Email" placeholder="Email" type="email"></input>
                            </Box>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Empty"
                                className="text-area"
                                style={{ width:  "100%", height: "200px" }}
                                name="Message"
                            ></TextareaAutosize>
                            <div className="btn">
                                <Button type="submit" size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}>Submit</Button>
                            </div>
                        </form>
                    </Box>
				</Box>
			</>
		</Animation>
	);
}