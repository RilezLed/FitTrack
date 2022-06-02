import React, { useState, createContext, useEffect, useMemo } from "react";

//import { Log } from '../screens/Log';
//import { LogItem } from '../components/LogItem';
//import { Children } from "react/cjs/react.production.min";

export const LogContext = createContext();

export const LogContextProvider = ({ children }) => {
    const [routines, setRoutines] = useState({});



    return (
        <LogContext.Provider value={{ routines: [] }} >
            {children}
        </LogContext.Provider >
    )
}