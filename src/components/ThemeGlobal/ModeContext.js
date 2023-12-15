import React, { createContext, useContext, useState } from "react";

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [isLightMode, setLightMode] = useState(false);

  const toggleMode = () => {
    setLightMode(!isLightMode);
  };

  return (
    <ModeContext.Provider value={{ isLightMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  return useContext(ModeContext);
};
