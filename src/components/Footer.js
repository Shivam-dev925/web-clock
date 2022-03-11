import React from "react";
import { Box } from "../styles/Styledcomponents";
import "./Footer.css";
function Footer() {
  return (
    <Box
      className="footer"
      data-aos="fade-up"
      data-aos-duration="1000"
      height="70vh"
      width="100%"
      bgColor="#353839"
    >
      <div>
        <div>
          <h1 data-aos-delay="500" data-aos="fade-down">
            CLOCK
          </h1>
          <p data-aos-delay="550" data-aos="fade-down">
            Clocks slay time. Time is dead as long as it is being clicked off by
            little wheels; only when the clock stops does time come to life.
          </p>
        </div>
        <div>
          <ul data-aos-delay="580" data-aos="fade-up">
            <li>Resources</li>
            <li>Stopwatch with laps </li>
            <li>Analog clock</li>
            <li>Digital clock</li>
            <li>World clock</li>
            <li>Timer</li>
          </ul>
          <ul data-aos-delay="580" data-aos="fade-up">
            <li>Social</li>
            <li>
              <a
                href="http://github.com/Shivam-dev925"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/atheletic-india-058061218/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/chikara6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100013320966522"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img
          style={{ objectFit: "cover" }}
          height="100%"
          width="100%"
          src="images/footer.webp"
          alt=""
        />
      </div>
    </Box>
  );
}

export default Footer;
