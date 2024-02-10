import React, { createContext, useState } from "react";

export const InfoContext = createContext();

export default function InfoProvider({ children }) {
    const [data , setdata] = useState([])
  return (
    <InfoContext.Provider value={{data , setdata}}>
      {children}
    </InfoContext.Provider>
  );
}
