import React, { useEffect, useState } from "react";
import { Box } from "../styles/Styledcomponents";
import { Form } from "react-bootstrap";
import { UseTimeZoneLayer } from "../contexts/TImeZoneContext";
import "./Clock.css";

function Clocks() {
  const {
    showZoneTime,

    setSelectedZone,
    timeZones,
  } = UseTimeZoneLayer();

  const [check, setCheck] = useState(false);
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("Asia");
  const [location, setLocation] = useState("Kolkata");
  const [analogTime, setAnalogTime] = useState({
    analogHours: 0,
    analogMin: 0,
    analogSec: 0,
  });

  /* function AnalogClock() {
    let d = new Date();
    setAnalogTime({ analogSec: d.getSeconds() * 6 });
    setAnalogTime({ analogMin: d.getMinutes() * 6 });
    setAnalogTime({
      analogHours: d.getHours() * 30,
    });

    document.getElementById("sec").style.transform =
      "rotate(" + analogTime.analogSec + "deg)";
    document.getElementById("min").style.transform =
      "rotate(" + analogTime.analogMin + "deg)";
    document.getElementById("hour").style.transform =
      "rotate(" + analogTime.analogHours + "deg)";
      
      setInterval(AnalogClock, 1000);
      
    }*/

  const HandleCheck = () => {
    setCheck(!check);
  };
  const HandleOpen = () => {
    setOpen(true);
  };

  const GetZone = (id) => {
    setSelectedZone(id);
    setOpen(false);
    console.log(id);
    setCountry(id.split("/")[0]);
    setLocation(id.split("/")[1]);
  };
  return (
    <Box
      position="relative"
      className="clocks"
      width="100%"
      height="87.8vh"
      display="flex"
      Direction="row"
      bgColor="rgb(10, 4, 46)"
    >
      <div className="clock_left">
        <div className="analog">
          <div>
            {!check ? <h1>Digital</h1> : <h1>Analog</h1>}
            <Form>
              <Form.Check
                style={{ fontSize: "22px", color: "green" }}
                onClick={HandleCheck}
                type="switch"
                name="clock"
                id="clock"
              />
            </Form>
          </div>
        </div>
        <div className="Areaselection">
          <h3
            style={{ textAlign: "center", boxShadow: "0 0 5px white" }}
            onClick={HandleOpen}
          >
            Select Time Zone
          </h3>
          {open && (
            <ul style={{ overflowY: "overlay" }}>
              {timeZones?.data?.map((zone) => {
                return (
                  <li onClick={() => GetZone(zone)} key={zone}>
                    {zone}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="clock_right">
        {check ? (
          <div className="clock">
            <div className="numbers number12">12</div>
            <div className="numbers number1">1</div>
            <div className="numbers number2">2</div>
            <div className="numbers number3">3</div>
            <div className="numbers number4">4</div>
            <div className="numbers number5">5</div>
            <div className="numbers number6">6</div>
            <div className="numbers number7">7</div>
            <div className="numbers number8">8</div>
            <div className="numbers number9">9</div>
            <div className="numbers number10">10</div>
            <div className="numbers number11">11</div>
            <div id="hour" className=" hands hour_hand "></div>
            <div id="min" className=" hands min_hand"></div>
            <div id="sec" className=" hands sec_hand"></div>
            <div className="pointer"></div>
          </div>
        ) : (
          <div className="digital">
            <h1>{showZoneTime.time}</h1>
            <h3>{showZoneTime.date}</h3>
            <div>
              <h4>
                Country : <span>{country}</span>
              </h4>
              <h4>
                Location : <span>{location}</span>
              </h4>
            </div>
          </div>
        )}
      </div>
    </Box>
  );
}

export default Clocks;
