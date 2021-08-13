import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center"
      },
      paper: {
        maxWidth: "100%",
        padding: theme.spacing(3),
        
        margin: theme.spacing(2),
      },
}));