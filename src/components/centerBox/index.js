import React from 'react';
import { Box } from '@mui/material';

const style = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
};

function CenterBox({ children }) {
  return (
    <Box sx={style}>
      {children}
    </Box>
  );
};

export default CenterBox;
