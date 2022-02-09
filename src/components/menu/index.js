import React from 'react';
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
  ContentCut,
  ContentPaste,
  Dashboard
} from '@mui/icons-material';


function MenuComponent({ children }) {
  return (
    <Grid alignItems="stretch" container direction="row" justifyContent="flex-start" spacing={2}>
      <Grid item md={3}>
        <Paper sx={{ maxWidth: '100%', height: '100vh' }}>
          <MenuList>
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
      <Grid item md={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default MenuComponent;
