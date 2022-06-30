import React from "react";
import logo from "./letter-u-svgrepo-com.svg"
import SchoolIcon from '@mui/icons-material/School';
import { Avatar, Button, Chip } from "@mui/material";
import { Box } from "@mui/material";
import './AboutMe.css'
import { Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <>
    <Box className="main-div">
      <Typography variant="h4" className="about-title">About Me</Typography>
      <Box className="class-wrap">
      <Box className="avatar-img">
        <Avatar
          alt="Remy Sharp"
          src="https://avatars.githubusercontent.com/u/50875291?v=4"
          sx={{ width: 260, height: 260 }}
          className="avatar-cls"
        />
        <Box className="about-in">
          <Typography variant="subtitle1" className="about-intro">
          Hi, I'm Uzaif Sheikh a final year computer science student at University of New South Wales (UNSW). I enjoy 
          complex problem-solving particularly interested in Full Stack development, I love building efficient 
          and user-friendly applications. I'm also an open-source and blockchain enthusiast and love learning from 
          open source communities and giving back the same.
          </Typography>
          <Typography variant="h5" className="skills">Tech Stack:</Typography>
          <Box className="grid-display">
            <Chip className="btn-skill"
              avatar={<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" width="30px" height="30px"></img>}
              label="React"
            />
            <Chip className="btn-skill"
              avatar={<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" width="30px" height="30px"></img>}
              label="NodeJs"
            />
            <Chip className="btn-skill"
              avatar={<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" width="30px" height="30px"></img>}
              label="Python"
            />
            <Chip className="btn-skill"
              avatar={<img src="https://gamingshogun.com/wp-content/uploads/2012/11/unityLogo.png" width="30px" height="30px"></img>}
              label="Unity"
            />
            <Chip className="btn-skill"
              avatar={<img src="https://static.cdnlogo.com/logos/d/41/docker.svg" width="30px" height="30px"></img>}
              label="Docker"
            />
            <Chip className="btn-skill"
              avatar={<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" width="20px" height="20px"></img>}
              label="Javascript"
            />
            <Chip className="btn-skill"
              avatar={<img src="https://camo.githubusercontent.com/2771059ece39a91f0ca8afe0205a540e3af66f435508ba80b080eb249479d4dc/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f632d70726f6772616d6d696e672e706e67" width="30px" height="30px"></img>}
              label="C"
            />
            <Chip className="btn-skill"
              avatar={<img src="https://camo.githubusercontent.com/04a68d28c34b095402af3f66b15a65b9802c0d7ffdfa813635f65a9dbb18c16e/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f632d706c75732d706c75732d6c6f676f2e706e67" width="30px" height="30px"></img>}
              label="C++"
            />
          </Box>
        </Box>
        </Box>
      </Box>
      
      {/* <div>
        <SchoolIcon />
        <Typography variant="h5">
          University of New South Wales
        </Typography>
      </div> */}
    </Box>
    </>
  );
}