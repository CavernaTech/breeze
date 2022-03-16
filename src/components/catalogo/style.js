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
  transition: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    overflow: "hidden",
  },
  collapse: {
    minWidth: 0,
    height: "100%",
    transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    transitionDuration: "300ms",
  },
  collapseOpen: {
    width: "100%",
  },
  collapseClose: {
    width: "0",
    visibility: "hidden",
  },
}));

export default useStyles;
