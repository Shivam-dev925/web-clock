import React from "react";
import "./Navbar.css";
import { Nav } from "../styles/Styledcomponents";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Nav>
      <img
        style={{
          objectFit: "contain",
          width: "200px",
          opacity: "0.8",
          height: "110px",
        }}
        src="images/logo.png"
        alt="logo not found"
      />

      <ul className="navul" >
        <Link to="/">
          <li className="navlist">Home</li>
        </Link>
        <Link to="/webClock/stopwatch">
          <li className="navlist">Stopwatch</li>
        </Link>
        <Link to="/webClock/clocks">
          <li className="navlist">Clocks</li>
        </Link>
        <Link to="/webClock/Timer">
          <li className="navlist">Timer</li>
        </Link>
        <Link to="webClock/About">
          <li className="navlist">About</li>
        </Link>
      </ul>
    </Nav>
  );
}

export default Navbar;
