import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Animation from "./Animation";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Chip } from "@mui/material";
import { Divider } from "@mui/material";
import fur from "./drac.png";
import circle from "./circle.jpg";
import flockr from "./flockr.jpg";
import sudoku from "./sudoku.jpg";
import frankie from "./Frankie.jpg";
import coronaRun from "./coverGame.JPG";
import blobby from "./Blobby.jpg";
import nn from "./cnn.png";
import loop from "./loopmania.jpg";
import portfolio from "./personal-web.jpg";
import "./Projects.css";

export default function Projects() {

	return (
		<Animation>
			<>
				<Box className="main-div">
                    <Typography variant="h4" className="about-title">Projects</Typography>
                    <Box className="projects-container">
                    <div><Card className="card-content" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="fury of dracula"
                            height="100"
                            image={circle}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" className="project-tittle" component="div">
                            Circles
                            </Typography>
                            <div className="skills">
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" width="20px" height="20px"></img>}
                                    label="Javascript"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" width="30px" height="30px"></img>}
                                    label="Python"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" width="30px" height="30px"></img>}
                                    label="React"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://avatars.githubusercontent.com/u/13142323?s=200&v=4" width="30px" height="30px"></img>}
                                    label="Redux"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://fastapi.tiangolo.com/img/icon-white.svg" width="30px" height="30px"></img>}
                                    label="FastAPI"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://avatars.githubusercontent.com/u/45120?s=200&v=4" width="30px" height="30px"></img>}
                                    label="MongoDB"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://static.cdnlogo.com/logos/d/41/docker.svg" width="30px" height="30px"></img>}
                                    label="Docker"
                                />
                            </div>
                            <Divider className="divider-st"/>
                            <Typography variant="body2"  className="project-des">
                            Circles is a free degree planner for UNSW students aiming to provide a easier way 
                            to plan when to take their courses and explore potential courses available and 
                            review their degree progression.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href="https://github.com/csesoc/Circles" target="__blank" style={{"marginRight": "1px", "textDecoration": "none"}}><Button size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><GitHubIcon />GitHub</Button></a>
                            <a href="https://circles.csesoc.app/" target="__blank" style={{"marginRight": "1px", "textDecoration": "none"}}><Button size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><ExitToAppIcon />Demo</Button></a>
                        </CardActions>
                    </Card></div>
                    <div><Card className="card-content" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="fury of dracula"
                            height="100"
                            image={fur}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" className="project-tittle" component="div">
                            Fury Of Dracula
                            </Typography>
                            <div className="skills">
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://camo.githubusercontent.com/2771059ece39a91f0ca8afe0205a540e3af66f435508ba80b080eb249479d4dc/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f632d70726f6772616d6d696e672e706e67" width="30px" height="30px"></img>}
                                    label="C"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://img.icons8.com/plasticine/48/000000/bash.png" width="30px" height="30px"></img>}
                                    label="Bash"
                                />
                            </div>
                            <Divider className="divider-st"/>
                            <Typography variant="body2"  className="project-des">
                            An AI based Heuristic game based on graph algorithms, which is played by predicting the next moves of hunters by dracula, 
                            based on the previous set of hunter's visible moves. We use basic djikstra's and breadth first search for the purpose of 
                            this project with a slight variation of minimax algorithm to predit the next move.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href="https://github.com/Uzaif-Sheikh/Fury-of-Dracula" target="__blank" style={{"marginRight": "2px", "textDecoration": "none"}}><Button size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><GitHubIcon />GitHub</Button></a>
                        </CardActions>
                    </Card></div>
                    <div><Card className="card-content" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="fury of dracula"
                            height="100"
                            image={loop}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" className="project-tittle" component="div">
                            Loop Mania
                            </Typography>
                            <div className="skills">
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://i.pinimg.com/originals/e9/94/61/e99461fdd5b3db8bdb3081d8acf5e524.png" width="30px" height="30px"></img>}
                                    label="Java"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://i.pinimg.com/originals/e9/94/61/e99461fdd5b3db8bdb3081d8acf5e524.png" width="30px" height="30px"></img>}
                                    label="JavaFX"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Text-xml.svg/1200px-Text-xml.svg.png" width="30px" height="30px"></img>}
                                    label="XML"
                                />
                            </div>
                            <Divider className="divider-st"/>
                            <Typography variant="body2"  className="project-des">
                            An engaging and fun game in which the protagonist must accomplish numerous goals over a series of runs in order to 
                            finish and prevail. To provide the player a different experience on every run, the game features a number of game modes 
                            in addition to randomly generated game objectives and enemy motions. To ensure that code is available to extension but 
                            closed to alteration, the game makes use of object-oriented design patterns like <strong>Observer, State, Composite, Template, Abstract Factory, 
                            Strategy, Singleton, and Decorator.</strong> Java serves as the backend and JavaFx as fronted.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href="https://github.com/Uzaif-Sheikh/Loop-Mania" target="__blank" style={{"marginRight": "2px", "textDecoration": "none"}}><Button size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><GitHubIcon />GitHub</Button></a>
                        </CardActions>
                    </Card></div>
                    <div><Card className="card-content" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="fury of dracula"
                            height="100"
                            image={portfolio}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" className="project-tittle" component="div">
                            Portfolio Website
                            </Typography>
                            <div className="skills">
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" width="20px" height="20px"></img>}
                                    label="Javascript"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" width="30px" height="30px"></img>}
                                    label="React"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://mui.com/static/logo.png" width="30px" height="30px"></img>}
                                    label="Material UI"
                                />
                            </div>
                            <Divider className="divider-st"/>
                            <Typography variant="body2"  className="project-des">
                            Developed a portfolio website built with React, JavaScript, FramerMotion and Material UI.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href="https://github.com/Uzaif-Sheikh/portfolio" target="__blank" style={{"marginRight": "2px", "textDecoration": "none"}}><Button size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><GitHubIcon />GitHub</Button></a>
                        </CardActions>
                    </Card></div>
                    <div><Card className="card-content" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="fury of dracula"
                            height="100"
                            image={sudoku}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" className="project-tittle" component="div">
                            Sudoku Solver
                            </Typography>
                            <div className="skills">
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://camo.githubusercontent.com/04a68d28c34b095402af3f66b15a65b9802c0d7ffdfa813635f65a9dbb18c16e/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f632d706c75732d706c75732d6c6f676f2e706e67" width="30px" height="30px"></img>}
                                    label="C++"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" width="20px" height="20px"></img>}
                                    label="Javascript"
                                />
                            </div>
                            <Divider className="divider-st"/>
                            <Typography variant="body2"  className="project-des">
                            Bulit a Sudoku solving backtracking algorithm in C++ which uses stochastic search to solve all 19,000 sample
                            Sudoku problems in under 1 second.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href="https://github.com/Uzaif-Sheikh/Sudoku-Solver" target="__blank" style={{"marginRight": "1px", "textDecoration": "none"}}><Button size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><GitHubIcon />GitHub</Button></a>
                            <a href="https://uzaif-sheikh.github.io/Sudoku-Solver/" target="__blank" style={{"marginRight": "1px", "textDecoration": "none"}}><Button size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><ExitToAppIcon />Demo</Button></a>
                        </CardActions>
                    </Card></div>
                    <div><Card className="card-content" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="fury of dracula"
                            height="100"
                            image={flockr}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" className="project-tittle" component="div">
                            Flockr
                            </Typography>
                            <div className="skills">
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" width="30px" height="30px"></img>}
                                    label="Python"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://www.probytes.net/wp-content/uploads/2018/10/flask-logo-png-transparent.png" width="30px" height="30px"></img>}
                                    label="Flask"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://jwt.io/img/pic_logo.svg" width="30px" height="30px"></img>}
                                    label="JWT"
                                />
                            </div>
                            <Divider className="divider-st"/>
                            <Typography variant="body2"  className="project-des">
                            Flockr is a collaborative messaging app for teams which supports direct and group messaging with public
                            and private channels. 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href="https://github.com/Uzaif-Sheikh/flockr" target="__blank" style={{"marginRight": "1px", "textDecoration": "none"}}><Button size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><GitHubIcon />GitHub</Button></a>
                        </CardActions>
                    </Card></div>
                    <div><Card className="card-content" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="fury of dracula"
                            height="100"
                            image={blobby}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" className="project-tittle" component="div">
                            Blobby
                            </Typography>
                            <div className="skills">
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://camo.githubusercontent.com/2771059ece39a91f0ca8afe0205a540e3af66f435508ba80b080eb249479d4dc/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f632d70726f6772616d6d696e672e706e67" width="30px" height="30px"></img>}
                                    label="C"
                                />                               
                            </div>
                            <Divider className="divider-st"/>
                            <Typography variant="body2"  className="project-des">
                            Created Blobby, a file archiver from scratch using bit shift and C. made use of a sophisticated recursive algorithm to traverse through every file and subdirectory in a given directory. 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href="https://github.com/Uzaif-Sheikh/blobby" target="__blank" style={{"marginRight": "1px", "textDecoration": "none"}}><Button size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><GitHubIcon />GitHub</Button></a>
                        </CardActions>
                    </Card></div>
                    <div><Card className="card-content" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="fury of dracula"
                            height="100"
                            image={frankie}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" className="project-tittle" component="div">
                            Frankie The Fox
                            </Typography>
                            <div className="skills">
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://cdn.worldvectorlogo.com/logos/c--4.svg" width="20px" height="20px"></img>}
                                    label="C#"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://gamingshogun.com/wp-content/uploads/2012/11/unityLogo.png" width="30px" height="30px"></img>}
                                    label="Unity"
                                />
                            </div>
                            <Divider className="divider-st"/>
                            <Typography variant="body2"  className="project-des">
                                Frankie The Fox, a survival game based on a fox called Frankie who once lived on the UNSW campus, <a target="__blank" href="https://7news.com.au/news/animals/several-students-bitten-by-fox-at-university-of-new-south-wales-kensington-campus-c-1105225" style={{"color": "rgba(205, 198, 198)"}}>more on Frankie</a>. The game was developed with C# on Unity.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href="https://github.com/Uzaif-Sheikh/Frankie-the-fox" target="__blank" style={{"marginRight": "1px", "textDecoration": "none"}}><Button size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><GitHubIcon />GitHub</Button></a>
                            <a href="https://gamenchill.itch.io/frakie-the-fox" target="__blank" style={{"marginRight": "1px", "textDecoration": "none"}}><Button size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><ExitToAppIcon />Demo</Button></a>
                        </CardActions>
                    </Card></div>
                    <div><Card className="card-content" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="fury of dracula"
                            height="100"
                            image={nn}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" className="project-tittle" component="div">
                            Simpson Characters Classifier
                            </Typography>
                            <div className="skills">
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" width="30px" height="30px"></img>}
                                    label="Python"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://avatars.githubusercontent.com/u/21003710?s=200&v=4" width="30px" height="30px"></img>}
                                    label="PyTorch"
                                />
                            </div>
                            <Divider className="divider-st"/>
                            <Typography variant="body2"  className="project-des">
                            Designed a image classifier to classify Simpson characters using Convolutional neural network with ReLu activation, CrossEntropyLoss as lose function
                            and Adam for the optimiser, written in python using the framework PyTorch.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href="https://github.com/Uzaif-Sheikh/image-clarifier-alphazero" target="__blank" style={{"marginRight": "1px", "textDecoration": "none"}}><Button size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><GitHubIcon />GitHub</Button></a>
                        </CardActions>
                    </Card></div>
                    <div><Card className="card-content" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="fury of dracula"
                            height="100"
                            image={coronaRun}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" className="project-tittle" component="div">
                            CoronaRun
                            </Typography>
                            <div className="skills">
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://cdn.worldvectorlogo.com/logos/c--4.svg" width="20px" height="20px"></img>}
                                    label="C#"
                                />
                                <Chip className="btn-skill"
                                    avatar={<img className="image-hover" src="https://gamingshogun.com/wp-content/uploads/2012/11/unityLogo.png" width="30px" height="30px"></img>}
                                    label="Unity"
                                />
                            </div>
                            <Divider className="divider-st"/>
                            <Typography variant="body2"  className="project-des">
                            CoronaRun was developed during a 2-day Game Jam competition using Unity and C#. 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href="https://github.com/Uzaif-Sheikh/CoronaRun" target="__blank" style={{"marginRight": "1px", "textDecoration": "none"}}><Button size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><GitHubIcon />GitHub</Button></a>
                            <a href="https://gamenchill.itch.io/coronarun" target="__blank" style={{"marginRight": "1px", "textDecoration": "none"}}><Button size="small" style={{ "backgroundColor": "rgba(110, 152, 244, 0.95)", "fontWeight": "bold", "color": "black" }}><ExitToAppIcon />Demo</Button></a>
                        </CardActions>
                    </Card></div>
                    </Box>
				</Box>
			</>
		</Animation>
	);
}