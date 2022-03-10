import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.default,
    height: "90vh",
    width: "100%",
    paddingTop: "5em",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(6),
      paddingTop: "3.5em",
    },
  },
  tabs: {
    borderBottom: 1,
    borderColor: "divider",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default useStyles;
