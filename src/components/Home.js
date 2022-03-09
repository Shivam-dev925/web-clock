import React, { useEffect } from "react";
import { Box } from "../styles/Styledcomponents";
import "./Home.css";

function Home() {
  const parallax = (e) => {
    const Icons = document.querySelectorAll(".icons");
    Icons.forEach((icon) => {
      const speed = icon.getAttribute("data-speed");

      const X = (window.innerWidth - e.pageX * speed) / 80;
      const Y = (window.innerHeight - e.pageY * speed) / 100;

      icon.style.transform = `translateX(${X}px)  translateY(${Y}px)`;
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", parallax);
    return () => {
      window.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <Box
      id="HomePage"
      width="100%"
      height="87vh"
      bgImage='url("images/background.jpg")'
      Attachment="fixed"
      bgPosition="right"
    >
      <img
        src="images/1.png"
        alt="animatedicons"
        data-speed="-5"
        className="icons"
      />

      <img
        src="images/3.png"
        alt="animatedicons"
        data-speed="5"
        className="icons"
      />
      <img
        src="images/4.png"
        alt="animatedicons"
        data-speed="2"
        className="icons"
      />
      <img
        src="images/7.png"
        alt="animatedicons"
        data-speed="6"
        className="icons"
      />
      <img
        src="images/10.png"
        alt="animatedicons"
        data-speed="8"
        className="icons"
      />
      <img
        src="images/11.png"
        alt="animatedicons"
        data-speed="2"
        className="icons"
      />
      <img
        src="images/12.png"
        alt="animatedicons"
        data-speed="-5"
        className="icons"
      />

      <h1 id="Title" className="Home_title">
        Time <br /> to change
      </h1>
    </Box>
  );
}

export default Home;
