import React, { useEffect } from "react";
import { Box } from "../styles/Styledcomponents";
import "./Home.css";
import aos from "aos";
import "aos/dist/aos.css";
import HomeCard from "../components/HomeCard";
import {
  faCloud,
  faCloudRain,
  faCloudSun,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Box
        data-aos="fade-in"
        debounceDelay="50"
        data-aos-duration="3000"
        bgColor="rgb(114, 153, 114)"
        className="section s2"
        width="100%"
        height="89vh"
      >
        <div className="HomeDiv">
          <img className="homeImg" src="images/a.jpg" alt="" />
        </div>
      </Box>
      <Box
        data-aos="fade-up"
        id="HomePage"
        className="section s1"
        width="100%"
        height="105vh"
        bgImage='url("images/background.jpg")'
        Attachment="scroll"
        bgPosition="right"
      >
        <h1 data-aos="fade-right" id="Title" className="Home_title">
          Time <br /> to change
        </h1>
      </Box>
      <Box className="HomeDes" width="100%" bgColor="#010A29">
        <header>
          <h1>Availability</h1>
        </header>
       
            <h1
              data-aos="fade-right"
              data-aos-anchor="#h1"
              data-aos-duration="500"
              className="h1"
              id="h1"
            >
              Remote <br /> World's Time Zones{" "}
            </h1>
        
          <div data-aos="fade-in" data-aos-duration="2000">
            <HomeCard
              icon={faCloudRain}
              temp=" 15"
              time="02:00"
              city="London"
              id="first"
            />
            <HomeCard
              icon={faCloudSun}
              time="08:00"
              temp="31"
              city="Thar"
              id="second"
            />
            <HomeCard
              icon={faCloud}
              temp=" 20  "
              time="12:10 "
              city="Uttrakhand"
              id="third"
            />
         </div>

      
      </Box>
    </>
  );
}

export default Home;
