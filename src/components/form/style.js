import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  actionsFlex: {
    flexGrow: 0,
    [theme.breakpoints.up("sm")]: {
      flexGrow: 1,
    },
  },
}));

export default useStyles;
