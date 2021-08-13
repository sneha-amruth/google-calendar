import React, { useState } from "react";
import { TableHead, TableCell, TableRow, Paper } from "@material-ui/core";
import moment from "moment";
import useStyles from "./styles";
// import { useWeek } from "../../../src/context/week-context";

export default function Week() {
  const classes = useStyles();
 
  
  const weekdaysArray = moment.weekdays();
  const startOfWeek = moment().startOf("week");
  const endOfWeek = moment().endOf("week");

  console.log("start of week "+startOfWeek.clone().add(7, "d").toDate().getDate());
  console.log("months "+typeof startOfWeek)

  var days = [];
  var day = startOfWeek;
  
  while (day <= endOfWeek) {
    days.push(day.toDate().getDate());
    day = day.clone().add(1, "d");
  }

  return (
    <div className={classes.root}>
    <Paper className={classes.paper}>
      <TableHead>
        <TableRow>
          {weekdaysArray.map((weekday) => (
            <TableCell>{weekday}</TableCell>
          ))}
        </TableRow>
        <TableRow>
          {days.map((date) => (
            <TableCell>{date}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    </Paper>
    </div>
  );
}
