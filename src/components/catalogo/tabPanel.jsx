import { Box } from "@mui/material";
import clsx from "clsx";

import useStyle from "./style";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyle();

  return (
    <Box
      className={clsx(classes.collapse, {
        [classes.collapseOpen]: value === index,
        [classes.collapseClose]: value !== index,
      })}
    >
      <div
        role="tabpanel"
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {children}
      </div>
    </Box>
  );
}

export default TabPanel;
