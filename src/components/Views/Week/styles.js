import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => 
  createStyles({
    root: {
        display: "flex",
        justifyContent: "center"
      },
      paper: {
        maxWidth: "100%",
        padding: theme.spacing(3),
        margin: theme.spacing(2),
      },
      weekday: {
        textAlign: "center",
      },
      dates: {
        textAlign: "center",
        marginLeft: "50px",
      },
      currentDate: {
        backgroundColor: "#f50057",
        marginLeft: "50px"
      },
      modalPaper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
      eventTime: {
        display: "flex",
        marginTop: "1rem",
      },
      cellBox: {
        height: 40,
        width: 120,
        borderRadius: "5px",
      }
    })
);