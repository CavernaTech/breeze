import { Paper, Typography, Fab, Tooltip, CardContent } from "@mui/material";
import { Check } from "@mui/icons-material";
import clsx from "clsx";
import { Box } from "@mui/system";

import useStyles from "./style";
import { useState } from "react";
import ExtractTable from "./extract";

function CheckoutComponent({ children }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <button
        className={clsx(classes.backdrop, {
          [classes.backdropOpen]: open,
          [classes.backdropClose]: !open,
        })}
        onClick={handleOpen}
      />
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
            <Typography variant="h5">Produtos</Typography>
          </Box>
          <Box>
            <Box sx={{ display: open ? "inherit" : "none" }}>
              <ExtractTable />
            </Box>
            <Typography
              color="success.light"
              component="span"
              variant="h4"
              sx={{ display: open ? "none" : "inherit" }}
            >
              R$ 100,00
            </Typography>
          </Box>
          <Fab color="secondary" className={classes.fab}>
            <Check />
          </Fab>
        </CardContent>
      </Paper>
    </>
  );
}

export default CheckoutComponent;
