import React from "react";
import { createTheme } from "@mui/material";

const Theme = (prefersDarkMode) =>
  React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#FCFCFC",
          },
          secondary: {
            main: "#80d8ff",
          },
          background: {
            default: prefersDarkMode ? "#121212" : "#F7F7F7",
          },
        },
      }),
    [prefersDarkMode]
  );

export default Theme;
