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

function EmojiTableCell({ align, children, variant }) {
  const classes = useStyles();
  return (
    <Tooltip title={children}>
      <TableCell align={align} >
        <Typography variant={variant} className={classes.title}>{children}</Typography>
      </TableCell>
    </Tooltip>
  );
}

EmojiTableCell.defaultProps = {
  align: "inherit",
  variant: "h5"
};

export default EmojiTableCell;
