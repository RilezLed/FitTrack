import React, { useState, createContext, useEffect, useMemo } from "react";

//import { Log } from '../screens/Log';
//import { LogItem } from '../components/LogItem';
//import { Children } from "react/cjs/react.production.min";

export const LogContext = createContext({}, () => { });

export const LogProvider = ({ children }) => {
    const [state, setState] = useState({})
    return (
        <LogContext.Provider value={[{ state }, setState]}>
            {children}
        </LogContext.Provider>
    )
}