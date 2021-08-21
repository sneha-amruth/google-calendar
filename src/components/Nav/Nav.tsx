import TodayIcon from "@material-ui/icons/Today";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import useStyles from "./styles";
import React from "react";
import { useWeek } from "../../../src/context/week-context";

export default function Nav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { weekState, weekDispatch } = useWeek();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const moveToCurrentWeek = () => {
    weekDispatch({type: "CURRENT_WEEK"})
  }

  const nextWeekHandler = () => {
    weekDispatch({type: "NEXT_WEEK"})
  }

  const previousWeekHandler = () => {
    weekDispatch({type: "PREVIOUS_WEEK"})
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <TodayIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Calendar
          </Typography>
          <Button variant="outlined" color="inherit" onClick={moveToCurrentWeek}>Today</Button>
          <Tooltip title="Previous week">
            <IconButton aria-label="Previous week" color="inherit">
              <KeyboardArrowLeftIcon onClick={previousWeekHandler}/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Next week">
            <IconButton aria-label="Next week" color="inherit">
              <KeyboardArrowRightIcon onClick={nextWeekHandler}/>
            </IconButton>
          </Tooltip>
          <Typography variant="h6" className={classes.title}>
            {weekState.month} {" "} {weekState.year}
          </Typography>
          
          <Button variant="outlined" onClick={handleMenu} color="inherit">
            Week
          </Button>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Week</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
