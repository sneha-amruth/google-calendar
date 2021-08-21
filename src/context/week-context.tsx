import React from "react";
import { createContext, useContext, useReducer } from "react";
import { WeekContextType, State } from "./weekContext.type";
import { weekReducer } from "./weekReducer";
import moment from "moment";

const WeekContext = createContext<WeekContextType>({} as WeekContextType);

const defaultState: State = {
  year: moment().year(),
  month: moment().format("MMMM"),
  startOfWeek: moment().startOf("week"),
  endOfWeek: moment().endOf("week"),
  day: moment().format("dddd"),
  date: moment().date(),
  weekdates: [],
};

export const WeekProvider: React.FC = ({ children }) => {
  const [weekState, weekDispatch] = useReducer(weekReducer, defaultState);

  return (
    <WeekContext.Provider value={{ weekState, weekDispatch }}>
      {children}
    </WeekContext.Provider>
  );
};

export const useWeek = () => {
  return useContext(WeekContext);
};
