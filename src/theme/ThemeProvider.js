import { createContext, useMemo, useState, useContext } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const ThemeContext = createContext();

export const useThemeMode = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: { default: "#f4f6f8" },
              }
            : {
                background: { default: "#121212" },
              }),
        },
        typography: {
          fontFamily: "Roboto, sans-serif",
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
