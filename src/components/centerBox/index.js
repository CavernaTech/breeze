import React from 'react';
import { Box } from '@mui/material';

function CenterBox({ children }) {
  return (
    <Box sx={(theme) => ({
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.light,
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
    })}>
      {children}
    </Box>
  );
};

export default CenterBox;
