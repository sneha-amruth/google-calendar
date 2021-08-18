import React from "react";
import { useEvent } from "../../context/event-context";
import useStyles from "./styles";


import { mockServer } from "../../api/mock-server";
import { Typography } from "@material-ui/core";

mockServer();

type EventProps = {
    date: number,
     hour: string,
      month: string,
}

export default function Event(props: EventProps){
 const { eventState } = useEvent()
 const classes = useStyles();
    return(
        <>
       {eventState.eventsList.map(event => (
           event.date === props.date && event.hour === props.hour && event.month === props.month &&
           <div className={classes.event}>
             {event.title}
             <Typography> {event.hour}</Typography>
           </div>
       ))}
       
        </>
    )
}