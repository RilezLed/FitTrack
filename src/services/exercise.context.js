import React, { useState, createContext, useEffect, useMemo } from "react";

export const ExerciseContext = createContext({}, () => { });

export const ExerciseProvider = ({ children }) => {
    const [state, setState] = useState({})
    return (
        <ExerciseContext.Provider value={[{ state }, setState]}>
            {children}
        </ExerciseContext.Provider>
    )
}