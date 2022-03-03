import { TableCell, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    width: "2ch",
    whiteSpace: "nowrap",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      width: "100%"
    }
  },
}));

function EmojiCell({ align, emoji, title }) {
  const classes = useStyles();
  return (
    <Tooltip title={title}>
      <TableCell align={align || "inherit"} >
        <Typography variant="h5" className={classes.title}>{emoji} - {title}</Typography>
      </TableCell>
    </Tooltip>
  );
}

export default EmojiCell;
