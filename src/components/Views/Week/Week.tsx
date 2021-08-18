import React, { useState } from "react";
import {
  TableHead,
  TableCell,
  TableRow,
  Paper,
  Avatar,
  Modal,
  TextField,
  Typography,
  Button,
  Slide,
} from "@material-ui/core";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import moment from "moment";
import useStyles from "./styles";
import { useWeek } from "../../../../src/context/week-context";
import Event from "../../../components/Events/Event";
// import Grow from '@material-ui/core/Grow';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function Week() {
  const classes = useStyles();
  const { weekState } = useWeek();
  const [eventDate, setEventDate] = useState<number | null>(null);
  const [eventHour, setEventHour] = useState<string | null>(null);
  const [eventTitle, setEventTitle] = useState<string | null>(null);
  const weekdaysArray = moment.weekdays();
  const startOfWeek = weekState.startOfWeek;
  const endOfWeek = weekState.endOfWeek;

  var days = [];
  var day = startOfWeek;

  while (day <= endOfWeek) {
    days.push(day.toDate().getDate());
    day = day.clone().add(1, "d");
  }

  const getHoursInADay = () => {
    const items: string[] = [];
    new Array(24).fill(0).forEach((acc, index) => {
      items.push(moment({ hour: index }).format("h:mm A"));
    });
    return items;
  };

  const hoursInADay = getHoursInADay();

  const eventTitleHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEventTitle(event.target.value);
  };

  const createEventHandler = () => {
    console.log(eventHour + " event created");
    setOpen(false);
  };

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = (
    event: React.MouseEvent<HTMLElement>,
    date: number,
    hour: string
  ) => {
    setOpen(true);
    setEventDate(date);
    setEventHour(hour);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.modalPaper}>
      <TextField
        id="standard-basic"
        label="Add Title"
        onChange={(event) => eventTitleHandler(event)}
      />
      <div className={classes.eventTime}>
        <QueryBuilderIcon />{" "}
        <Typography>
          {weekState.month} {eventDate}, {eventHour}
        </Typography>
      </div>
      <Button variant="contained" color="primary" onClick={createEventHandler}>
        Save
      </Button>
    </div>
  );

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <div className={classes.root}>
        
      <Paper className={classes.paper}>
        <TableHead>
          <TableRow>
            <TableCell />
            {weekdaysArray.map((weekday) => (
              <>
                {/* <TableCell></TableCell> */}
                <TableCell key={weekday}  className={classes.weekday}>{weekday}</TableCell>
              </>
            ))}
          </TableRow>
          <TableRow>
            <TableCell />
            {days.map((date, index) => (
              <>
                <TableCell key={date}>
                  <Avatar
                    className={
                      moment().date() === date ? classes.currentDate : classes.dates
                    }
                  >
                    {date}
                  </Avatar>
                  {hoursInADay.map((hour, index) => (
                    <TableRow key={hour}>
                      <TableCell
                        onClick={(event) => handleOpen(event, date, hour)}
                        className={classes.cellBox}
                      >
                        {" "} 
                        <Event
                          date={date}
                          hour={hour}
                          month={weekState.month}
                        />{" "}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableCell>
              </>
            ))}
          </TableRow>
        </TableHead>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
      </Paper>
    </div>
    </Slide>
  );
}
