import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "100%",
    minHeight: "100vh",
    whiteSpace: "nowrap",
    position: "fixed",
    left: 0,
    [theme.breakpoints.up("md")]: {
      width: "25vw"
    }
  },
  drawerOpen: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: 0,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(6),
    },
  },
}));

export const menuItemIconStyles = makeStyles((theme) => ({
  disabled: {
    color: theme.palette.text.disabled,
  },
}));

export default useStyles;
