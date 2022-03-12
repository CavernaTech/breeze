import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.default,
    height: "90vh",
    width: "100%",
  },
  tabs: {
    borderBottom: 1,
    borderColor: "divider",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    margin: 8,
  },
}));

export default useStyles;
