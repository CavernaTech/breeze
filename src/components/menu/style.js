import React from 'react';
import { colors, createTheme } from '@mui/material';

const Style = (prefersDarkMode) =>
  React.useMemo(
    () =>
      createTheme({
      }),
    [prefersDarkMode],
  );

export default Style;
