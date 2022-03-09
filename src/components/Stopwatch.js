import {
  faAlignCenter,
  faArrowRotateLeft,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Box, Circle } from "../styles/Styledcomponents";
import "./Stopwatch.css";

function Stopwatch() {
  const [play, setPlay] = useState(false);
  const [intrvl, setIntrvl] = useState();
  const [laps, setLaps] = useState([]);
  const [stopwatch, setStopwatch] = useState({
    hr: 0,
    min: 0,
    sec: 0,
    msec: 0,
  });

  const Start = () => {
    HandlePlay();
    setPlay(true);
    setIntrvl(setInterval(HandlePlay, 10));
  };

  const HandlePlay = () => {
    if (stopwatch.min === 60) {
      stopwatch.hr++;
      stopwatch.min = 0;
    }
    if (stopwatch.sec === 60) {
      stopwatch.min++;
      stopwatch.sec = 0;
    }
    if (stopwatch.msec === 100) {
      stopwatch.sec++;
      stopwatch.msec = 0;
    }
    stopwatch.msec++;
    return setStopwatch({
      hr: stopwatch.hr,
      min: stopwatch.min,
      sec: stopwatch.sec,
      msec: stopwatch.msec,
    });
  };

  const HandleRestart = () => {
    setPlay(false);
    setLaps([]);
    setStopwatch({
      hr: 0,
      min: 0,
      sec: 0,
      msec: 0,
    });

    clearInterval(intrvl);
  };

  const HandlePause = () => {
    setPlay(false);
    clearInterval(intrvl);
  };

  const HandleLaps = () => {
    if (
      (stopwatch.hr !== 0) |
      (stopwatch.min !== 0) |
      (stopwatch.sec !== 0) |
      (stopwatch.msec !== 0)
    ) {
      setLaps((olditem) => {
        return [
          ...olditem,
          `${stopwatch.hr}:${stopwatch.min}:${stopwatch.sec}:${stopwatch.msec}`,
        ];
      });
    }
  };
  const Clicked = () => {
    console.log("sjkkccscs k");
  };

  return (
    <Box
      position="relative"
      className="Stopwatch"
      width="100%"
      height="87.8vh"
      display="flex"
      Direction="row"
    >
      <div className="stopwatch_left">
        <ul onClick={Clicked}>
          {laps.map((item, index) => {
            return (
              <li key={item}>
                <p>{index + 1}</p>

                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="stopwatch_right">
        <Circle
          id="ring"
          width="350px"
          height="350px"
          height768="320px"
          width768="320px"
          className="stopwatchCircle"
          border="5px solid grey"
          justify="center"
          display="flex"
          BorderTopAfter="5px solid #fff000"
          BorderRightAfter="5px solid #fff000"
          widthAfter="100%"
          heightAfter="100%"
          animation={play ? "rotateCircle 0.7s infinite linear" : null}
        >
          <h1>{stopwatch.hr >= 10 ? stopwatch.hr : "0" + stopwatch.hr}</h1>
          {":"}
          <h1>{stopwatch.min >= 10 ? stopwatch.min : "0" + stopwatch.min}</h1>
          {":"}
          <h1>{stopwatch.sec >= 10 ? stopwatch.sec : "0" + stopwatch.sec}</h1>
          {":"}
          <h1>
            {stopwatch.msec >= 10 ? stopwatch.msec : "0" + stopwatch.msec}
          </h1>
        </Circle>
        <div className="controls">
          {!play ? (
            <Circle
              onClick={Start}
              className="controlbutton"
              display="flex"
              justify="center"
              width="60px"
              height="60px"
              border="1px solid 	#00FFFF"
            >
              <FontAwesomeIcon className="control_icons" icon={faPlay} />
            </Circle>
          ) : (
            <Circle
              onClick={HandlePause}
              className="controlbutton"
              display="flex"
              justify="center"
              width="60px"
              height="60px"
              border="1px solid 	#00FFFF"
            >
              <FontAwesomeIcon className="control_icons" icon={faPause} />
            </Circle>
          )}

          <Circle
            onClick={HandleRestart}
            className="controlbutton"
            display="flex"
            justify="center"
            width="60px"
            height="60px"
            border="1px solid #00FFFF"
          >
            <FontAwesomeIcon
              className="control_icons"
              icon={faArrowRotateLeft}
            />
          </Circle>
          <Circle
            onClick={HandleLaps}
            className="controlbutton"
            display="flex"
            justify="center"
            width="60px"
            height="60px"
            border="1px solid #00FFFF"
          >
            <FontAwesomeIcon className="control_icons" icon={faAlignCenter} />
          </Circle>
        </div>
      </div>
    </Box>
  );
}

export default Stopwatch;
