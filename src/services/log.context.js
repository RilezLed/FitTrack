import React, { useState, createContext, useEffect, useMemo } from "react";

//import { Log } from '../screens/Log';
//import { LogItem } from '../components/LogItem';
//import { Children } from "react/cjs/react.production.min";

export const LogContext = createContext("");

// export const LogContextProvider = ({ children }) => {
//     return (
//         <LogContext.Provider value={{ logOfRoutines: [1, 2, 3] }}>
//             {children}
//         </LogContext.Provider >
//     )
// }