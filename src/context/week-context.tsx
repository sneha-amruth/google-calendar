import React from "react";
import { createContext, useContext, useReducer } from "react";
import { WeekContextType, State } from "./weekContext.type";
import { weekReducer } from "./weekReducer";
import moment from "moment";

const WeekContext = createContext<WeekContextType>({} as WeekContextType);
const value = moment();

const defaultState: State = { 
    year: value.year(),
    month: value.format("MMMM"),
    startOfWeek: value.startOf("week"),
    endOfWeek: value.endOf("week"),
    day: value.format('dddd'),
    date: value.date(),
}

export const WeekProvider: React.FC = ({children}) => {
    const [ weekState , weekDispatch] = useReducer(weekReducer, defaultState);

    return (
        <WeekContext.Provider value={{weekState, weekDispatch}}>
        {children}
       </WeekContext.Provider>
    )
}

export const useWeek = () => {
    return useContext(WeekContext);
 }
 