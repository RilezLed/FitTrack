import React, { useState, createContext, useEffect, useMemo } from "react";

export const RoutineContext = createContext({}, () => { });

export const RoutineProvider = ({ children }) => {
    const [state, setState] = useState({})
    return (
        <RoutineContext.Provider value={[{ state }, setState]}>
            {children}
        </RoutineContext.Provider>
    )
}