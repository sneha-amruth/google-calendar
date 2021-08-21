import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Events } from "../../context/eventContext.type";
import { useEvent } from "../../context/event-context";
import { mockServer } from "../../api/mock-server";
import { Typography } from "@material-ui/core";

mockServer();

type EventProps = {
  date: number;
  hour: string;
  month: string;
};

export default function Event(props: EventProps) {
  const { eventState } = useEvent();
  const classes = useStyles();
  const [currentEventsList, setCurrentEventsList] = useState<Events[] | null>(
    null
  );

  useEffect(() => {
    setCurrentEventsList(
      eventState.eventsList.filter(
        (event) =>
          event.date === props.date &&
          event.hour === props.hour &&
          event.month === props.month
      )
    );
  }, [eventState, []]);

  return (
    <>
      {
          currentEventsList?.map((event) => (
            <div className={classes.event}>
            <Typography variant="caption" display="block"> { currentEventsList.length > 1 ? event.title.split(" ")[0] : event.title} </Typography>
            <Typography variant="caption" display="block"> {event.hour}</Typography>
          </div> 
          ))
      }
    </>
  );
}
