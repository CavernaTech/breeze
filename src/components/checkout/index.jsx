import { Paper, Typography, Fab, Tooltip, CardContent } from "@mui/material";
import { Check } from "@mui/icons-material";
import clsx from "clsx";
import { Box } from "@mui/system";

import useStyles from "./style";
import { useState } from "react";

function CheckoutComponent({ children }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <Paper
      className={clsx(classes.checkout, {
        [classes.checkoutOpen]: open,
        [classes.checkoutClose]: !open,
      })}
    >
      <Tooltip onClick={handleOpen} title="Expandir">
        <Box className={classes.puller}>
          <Box className={classes.greyBox} />
        </Box>
      </Tooltip>
      <CardContent>
        <Box sx={{ display: open ? "inherit" : "none" }}>
          <Typography variant="h5">
            Produtos
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flexGrow: 1, display: open ? "inherit" : "none" }} />
          <Typography color="success.light" component="span" variant="h4">
            R$ 100,00
          </Typography>
        </Box>
        <Fab color="secondary" className={classes.fab}>
          <Check />
        </Fab>
      </CardContent>
    </Paper>
  );
}

export default CheckoutComponent;
