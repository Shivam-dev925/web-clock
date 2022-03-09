import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
export const TimeZomeContext = createContext();

const TimeZoneDatalayer = ({ children }) => {
  const [timeZones, setTimeZones] = useState([]);

  const [SelectedZone, setSelectedZone] = useState("");

  const BaseUrl = "http://worldtimeapi.org/api/timezone/";

  useEffect(() => {
    axios.get(BaseUrl).then((res) => {
      setTimeZones(res);
    });
  }, []);

  const NewTime = new Date().toLocaleTimeString();
  const NewDate = new Date().toLocaleDateString();

  const [showZoneTime, setShowZoneTime] = useState({
    time: NewTime,
    date: NewDate,
  });

  const Update = () => {
    axios
      .get(`${BaseUrl}${SelectedZone ? SelectedZone : "Asia/Kolkata"}`)
      .then((res) => {
        setShowZoneTime({
          time: res.data.datetime.split("T")[1].slice(0, 8),
          date: res.data.datetime.split(":")[0].slice(0, 10),
        });
      });
  };
  useEffect(() => {
    setInterval(Update(), 1000);
  }, [Update, setInterval]);

  return (
    <TimeZomeContext.Provider
      value={{
        showZoneTime,
        setShowZoneTime,
        setSelectedZone,
        timeZones,
        setTimeZones,
      }}
    >
      {children}
    </TimeZomeContext.Provider>
  );
};

export default TimeZoneDatalayer;

export const UseTimeZoneLayer = () => useContext(TimeZomeContext);
