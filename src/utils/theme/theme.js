import React from 'react';
import { colors, createTheme } from '@mui/material';

const Theme = (prefersDarkMode) =>
  React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: colors.cyan[600],
          },
          secondary: {
            main: colors.cyan[300]
          },
          text: {
            primary: colors.grey[900],
            secondary: colors.grey[100],
          }
        },
      }),
    [prefersDarkMode],
  );

export default Theme;
