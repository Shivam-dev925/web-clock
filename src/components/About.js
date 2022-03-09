import React from "react";
import { Box } from "../styles/Styledcomponents";
import "./About.css";
function About() {
  return (
    <Box
      position="relative"
      width="100%"
      height="87.8vh"
      display="flex"
      justify="center"
      Direction="row"
      bgColor="white"
      id="About"
    >
      <img width='100%' height='100%' src="images/background.jpeg" alt="" />
    </Box>
  );
}

export default About;
