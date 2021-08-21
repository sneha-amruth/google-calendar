import React from "react";
import { createContext, useContext, useReducer, useEffect } from "react";
import { EventContextType, State } from "./eventContext.type";
import { eventReducer } from "./eventReducer";
import axios from "axios";

const EventContext = createContext<EventContextType>({} as EventContextType);

const defaultState: State = { 
    eventsList: [],
}

export const EventProvider: React.FC = ({children}) => {
    const [eventState , eventDispatch] = useReducer(eventReducer, defaultState);
    
    const fetchData = async () => {
        try {
          const res = await axios.get("/api/events");
          eventDispatch({type: "SET_EVENTS", payload: res.data.events});
          
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <EventContext.Provider value={{eventState, eventDispatch}}>
        {children}
       </EventContext.Provider>
    )
}

export const useEvent = () => {
    return useContext(EventContext);
 }
