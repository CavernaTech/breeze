import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "100vw",
    minHeight: "100vh",
    whiteSpace: "nowrap",
    position: "fixed",
    zIndex: 101,
    left: 0,
    [theme.breakpoints.up("md")]: {
      width: "25vw",
    },
    "&:hover": {
      color: "palette.primary.main",
    },
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
  appbar: {
    height: theme.spacing(8),
  },
  content: {
    paddingTop: theme.spacing(6),
    animation: "fadeInAnimation ease 3s",
    animationIterationCount: "1",
    animationFillMode: "forwards",
  },
  "@keyframes fadeInAnimation": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  contentOpen: {
    paddingLeft: theme.spacing(8),
  },
  contentClose: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(6),
    },
  },
}));

export const menuItemIconStyles = makeStyles((theme) => ({
  disabled: {
    color: theme.palette.text.disabled,
    minWidth: 0,
  },
  title: {
    minWidth: "30%",
  },
  description: {
    color: theme.palette.text.secondary,
    minWidth: 0,
    overflow: "hidden",
  },
}));

export default useStyles;
