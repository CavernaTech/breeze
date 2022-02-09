import React from 'react';
import { ThemeProvider, useMediaQuery } from '@mui/material';

import theme from './theme';

const Theme = ({ children }) => {
  let prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  return (
    <ThemeProvider theme={theme(prefersDarkMode)}>{children}</ThemeProvider>
  );
};

export default Theme;