import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PortfolioIcon from "@material-ui/icons/Home";
const About = () => {
  
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/djtpgre4y/image/upload/v1638083794/AaquibDilkash_f5zwyq.jpg"
              alt="Founder"
            />
            <Typography>Aaquib Dilkash</Typography>
            <a
              href="https://linkedin.com/in/aaquibdilkash"
              target="blank"
            >
            <Button color="primary">
              Visit LinkedIn
            </Button>
            </a>
            <span>
            Hey, There! I am a Full Stack Developer who usually works with React, React Native and MERN stack to Develop Projects.This is a production ready MERN Stack E-Commerce website deployed on heroku.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Social Profiles</Typography>
            <a
              href="https://linkedin.com/in/aaquibdilkash"
              target="blank"
            >
              <LinkedInIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://github.com/aaquibdilkash" target="blank">
              <GitHubIcon className="instagramSvgIcon" />
            </a>
            <a href="https://aaquibdilkashdev.web.app" target="blank">
              <PortfolioIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
