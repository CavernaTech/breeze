import React from 'react';
import { colors, createTheme } from '@mui/material';

const Theme = (prefersDarkMode) =>
  React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: colors.cyan[600],
          },
          secondary: {
            main: colors.cyan[300]
          },
          background: {
            default: prefersDarkMode ? '#121212' : '#FAFAFA'
          }
        },
      }),
    [prefersDarkMode],
  );

export default Theme;
