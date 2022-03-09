import React, { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";

export const ImageContext = createContext();

const ImageDataLayer = ({ children }) => {
  const [BackgroundImage, setBackgroundImage] = useState("");

  return <ImageContext.Provider>{children}</ImageContext.Provider>;
};

export default ImageDataLayer;
