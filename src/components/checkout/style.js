import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  checkout: {
    width: "100vw",
    height: "80vh",
    left: 0,
    bottom: 0,
    top: "auto",
    whiteSpace: "nowrap",
    position: "fixed",
    zIndex: 104,
  },
  checkoutOpen: {
    transition: theme.transitions.create("height", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  checkoutClose: {
    transition: theme.transitions.create("height", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: "10vh",
  },
  fab: {
    position: "fixed",
    right: "7vh",
    bottom: "7vh",
  },
  puller: {
    padding: 40,
    paddingTop: 8,
    borderRadius: 3,
    position: "absolute",
    top: 0,
    left: "calc(50% - 15px)",
  },
  greyBox: {
    width: 30,
    height: 6,
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[600],
  },
}));

export default useStyles;
