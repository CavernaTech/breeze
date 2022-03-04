import React from "react";
import { createTheme } from "@mui/material";

const Theme = (prefersDarkMode) =>
  React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#fafafa",
          },
          secondary: {
            main: "#80d8ff"
          },
          background: {
            default: prefersDarkMode ? "#121212" : "#FAFAFA"
          }
        },
      }),
    [prefersDarkMode],
  );

export default Theme;
