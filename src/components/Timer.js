import React, { useState, useEffect } from "react";
import { Box } from "../styles/Styledcomponents";
import "./Timer.css";


function Timer() {
  const [timer, setTimer] = useState({
    mins: 5,
    secs: 60,
  });
  const [play, setPlay] = useState(false);
  const [intrvl, setIntrvl] = useState();

  const GetTime = (time) => {
    setTimer({ secs: 60, mins: time });
  };

  const UpdateTimer = () => {
    if (timer.secs === 1) {
      timer.mins--;
      setTimer({ secs: (timer.secs = 60) });
    }

    timer.secs--;

    return setTimer({
      mins: timer.mins,
      secs: timer.secs,
    });
  };

  const Start = () => {
    UpdateTimer();
    setPlay(true);
    setIntrvl(setInterval(UpdateTimer, 1000));
  };

  const Pause = () => {
    setPlay(false);
    clearInterval(intrvl);
  };

  const Restore = () => {
    setTimer({
      mins: 5,
      secs: 60,
    });
    setPlay(false);
    clearInterval(intrvl);
  };

  return (
    <Box
      position="relative"
      className="clocks"
      width="100%"
      height="87.8vh"
      display="flex"
      justify="center"
      Direction="row"
      bgColor="rgb(20, 10, 46)"
    >
      <div className="timer">
        <div>
          <h1>Timer - Online Timer</h1>
          <p>Free online timer</p>
          <div>
            <button
              onClick={(e) =>
                GetTime(
                  e.currentTarget.innerText.split("").slice(0, 2).join("")
                )
              }
              className="btn btn-sm btn-dark"
            >
              5 minutes
            </button>
            <button
              onClick={(e) =>
                GetTime(
                  e.currentTarget.innerText.split("").slice(0, 2).join("")
                )
              }
              className="btn btn-sm btn-dark"
            >
              10 minutes
            </button>
            <button
              onClick={(e) =>
                GetTime(
                  e.currentTarget.innerText.split("").slice(0, 2).join("")
                )
              }
              className="btn btn-sm btn-dark"
            >
              15 minutes
            </button>
            <button
              onClick={(e) =>
                GetTime(
                  e.currentTarget.innerText.split("").slice(0, 2).join("")
                )
              }
              className="btn btn-sm btn-dark"
            >
              20 minutes
            </button>
            <button
              onClick={(e) =>
                GetTime(
                  e.currentTarget.innerText.split("").slice(0, 2).join("")
                )
              }
              className="btn btn-sm btn-dark"
            >
              25 minutes
            </button>
            <button
              onClick={(e) =>
                GetTime(
                  e.currentTarget.innerText.split("").slice(0, 2).join("")
                )
              }
              className="btn btn-sm btn-dark"
            >
              30 minutes
            </button>
            <button
              onClick={(e) =>
                GetTime(
                  e.currentTarget.innerText.split("").slice(0, 2).join("")
                )
              }
              className="btn btn-sm btn-dark"
            >
              35 minutes
            </button>
            <button
              onClick={(e) =>
                GetTime(
                  e.currentTarget.innerText.split("").slice(0, 2).join("")
                )
              }
              className="btn btn-sm btn-dark"
            >
              {" "}
              40 minutes
            </button>
          </div>
        </div>
        <div>
          <div>{timer.mins < 10 ? "0" + timer.mins : timer.mins}</div>
          <span>:</span>
          <div>{timer.secs < 10 ? "0" + timer.secs : timer.secs}</div>
        </div>
        <div>
          {!play ? (
            <button onClick={Start}>START</button>
          ) : (
            <button onClick={Pause}>PAUSE</button>
          )}

          <button onClick={Restore}>RESTORE</button>
        </div>
      </div>
    </Box>
  );
}

export default Timer;
