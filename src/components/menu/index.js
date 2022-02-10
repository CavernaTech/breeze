import React, { useState } from 'react';
import {
  Divider,
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography
} from '@mui/material';
import {
  Cloud,
  ContentCopy,
  ContentPaste,
  Dashboard,
  Menu
} from '@mui/icons-material';
import clsx from 'clsx';

import useStyles from './style';


function MenuComponent({ children }) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  return (
    <Grid alignItems="stretch" container direction="row" justifyContent="flex-start" spacing={2}>
      <Grid item md={open ? 3 : 1}>
        <Paper
          className={clsx(
            classes.drawer,
            {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }
          )}
        >
          <MenuList>
            <MenuItem onClick={() => setOpen(!open)}>
              <ListItemIcon>
                <Menu fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘C
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘V
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Web Clipboard</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Grid>
      <Grid item md={open ? 9 : 11}>
        {children}
      </Grid>
    </Grid>
  );
};

export default MenuComponent;
