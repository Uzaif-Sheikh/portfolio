import React from "react";
import logo from "./letter-u-svgrepo-com.svg"
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Avatar, Button, Chip, List, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/material";
import './AboutMe.css'
import { Typography } from "@mui/material";
import Animation from "./Animation";
import typescript from "./typescript.png";
import dotnet from "./dotnet.png"

export default function AboutMe() {
  return (
    <Animation>
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
            Hi, my name is Uzaif Sheikh, and I'm a highly skilled computer science graduate and software engineer 
            with 2+ years of experience in full-stack development and a passion for solving complex problems. 
            Proficient in multiple programming languages, including TypeScript, JavaScript, Node.js, 
            React.js, Python, and .NET, and experienced in agile development methodologies. Strong communicator and 
            collaborator with a commitment to delivering high-quality code on time.
            </Typography>
            <br />
            <Typography variant="h5" className="skills">Tech Stack:</Typography>
            <Box className="grid-display">
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" width="30px" height="30px"></img>}
                label="React"
              />
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" width="30px" height="30px"></img>}
                label="NodeJs"
              />
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" width="30px" height="30px"></img>}
                label="Python"
              />
              
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src="https://www.probytes.net/wp-content/uploads/2018/10/flask-logo-png-transparent.png" width="30px" height="30px"></img>}
                label="Flask"
              />
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src={typescript} width="20px" height="20px"></img>}
                label="Typescript"
              />
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" width="20px" height="20px"></img>}
                label="Javascript"
              />
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src="https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.svg" width="30px" height="30px"></img>}
                label="SQL"
              />
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src="https://static.cdnlogo.com/logos/d/41/docker.svg" width="30px" height="30px"></img>}
                label="Docker"
              />
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src="https://camo.githubusercontent.com/2771059ece39a91f0ca8afe0205a540e3af66f435508ba80b080eb249479d4dc/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f632d70726f6772616d6d696e672e706e67" width="30px" height="30px"></img>}
                label="C"
              />
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src="https://camo.githubusercontent.com/04a68d28c34b095402af3f66b15a65b9802c0d7ffdfa813635f65a9dbb18c16e/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f632d706c75732d706c75732d6c6f676f2e706e67" width="30px" height="30px"></img>}
                label="C++"
              />
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src="https://i.pinimg.com/originals/e9/94/61/e99461fdd5b3db8bdb3081d8acf5e524.png" width="30px" height="30px"></img>}
                label="Java"
              />
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" width="30px" height="30px"></img>}
                label="ExpressJS"
              /> 
              <Chip className="btn-skill"
                  avatar={<img className="image-hover" src="https://cdn.worldvectorlogo.com/logos/c--4.svg" width="20px" height="20px"></img>}
                  label="C#"
              />
              <Chip className="btn-skill"
                  avatar={<img className="image-hover" src={dotnet} width="20px" height="20px"></img>}
                  label=".NET"
              />
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src="https://swimburger.net/media/ppnn3pcl/azure.png" width="30px" height="30px"></img>}
                label="Azure"
              />
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src="https://img.icons8.com/color/48/000000/amazon-web-services.png" width="30px" height="30px"></img>}
                label="AWS"
              />
              <Chip className="btn-skill"
                avatar={<img className="image-hover" src="https://img.icons8.com/plasticine/48/000000/bash.png" width="30px" height="30px"></img>}
                label="Bash"
              />
            </Box>

          <Typography variant="h5" className="awards" style={{"paddingBottom":"2px"}}>Awards and Scholarships:</Typography>
            <Box>
              <List className="main-list">
                <ListItemIcon className="inlist">
                  <ArrowForwardIosIcon style={{"color": "white", "width": "20px", "height": "30px"}} /> 
                  <Typography className="about-intro">UNSW Dean's Honours List</Typography>
                </ListItemIcon>
                <ListItemIcon className="inlist">
                  <ArrowForwardIosIcon style={{"color": "white", "width": "20px", "height": "30px"}} /> 
                  <Typography className="about-intro">Future of Change Scholarship, UNSW</Typography>
                </ListItemIcon>
                <ListItemIcon className="inlist">
                  <ArrowForwardIosIcon style={{"color": "white", "width": "20px", "height": "30px"}} /> 
                  <Typography className="about-intro">The Bronze Standard of the international award for young people, The Duke of Edinburgh’s International Award</Typography>
                </ListItemIcon>
              </List> 
            </Box>

          <Typography variant="h5" className="awards">Hobbies:</Typography>
            <Box>
              <List className="main-list">
                <ListItemIcon className="inlist">
                  <ArrowForwardIosIcon style={{"color": "white", "width": "20px", "height": "30px"}} /> 
                  <Typography className="about-intro">Snorkelling.</Typography>
                </ListItemIcon>
                <ListItemIcon className="inlist">
                  <ArrowForwardIosIcon style={{"color": "white", "width": "20px", "height": "30px"}} /> 
                  <Typography className="about-intro">Brazilian jiu-jitsu.</Typography>
                </ListItemIcon>
                <ListItemIcon className="inlist">
                  <ArrowForwardIosIcon style={{"color": "white", "width": "20px", "height": "30px"}} /> 
                  <Typography className="about-intro">Cooking.</Typography>
                </ListItemIcon>
                <ListItemIcon className="inlist">
                  <ArrowForwardIosIcon style={{"color": "white", "width": "20px", "height": "30px"}} /> 
                  <Typography className="about-intro">Soccer.</Typography>
                </ListItemIcon>
                <ListItemIcon className="inlist">
                  <ArrowForwardIosIcon style={{"color": "white", "width": "20px", "height": "30px"}} /> 
                  <Typography className="about-intro">Game development and Animation.</Typography>
                </ListItemIcon>
              </List> 
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
    </Animation>
  );
}