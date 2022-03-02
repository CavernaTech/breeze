import { TableCell, Tooltip, Typography } from "@mui/material";

function EmojiCell({ align, emoji, tooltip }) {
  return (
    <Tooltip title={tooltip}>
      <TableCell align={align || "inherit"}>
        <Typography variant="h5">{emoji}</Typography>
      </TableCell>
    </Tooltip>
  );
}

export default EmojiCell;
