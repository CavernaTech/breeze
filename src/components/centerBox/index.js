import React from 'react';
import { Box } from '@mui/material';

function CenterBox({ children, fixed }) {
  return (
    <Box sx={{
      bgcolor: 'background.default',
      bottom: 0,
      color: 'text.secondary',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      position: fixed ? 'fixed': 'inherit',
      width: '100%',
      zIndex: -1,
    }}>
      {children}
    </Box>
  );
};

export default CenterBox;
