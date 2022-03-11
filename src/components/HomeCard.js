import React from "react";
import { Box } from "../styles/Styledcomponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ zindex, id, temp, icon, city, time }) => {
  return (
    <Box id={id} className="Card" height="17rem" width="13rem">
      <FontAwesomeIcon className="icon" icon={icon} />

      <h2 className="Temp">{temp} &#176; F</h2>

      <h1 className="Time">
        {time}
        <small>AM</small>
      </h1>

      <h4 className="City">{city}</h4>
    </Box>
  );
};

export default Card;
