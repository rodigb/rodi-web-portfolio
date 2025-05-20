import React, { useRef, useEffect } from "react";
import "./App.css";
import RightSideGrid from "./components/RightSideGrid.tsx";
import { Box, createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Orbitron"],
      allVariants: {
        fontWeight: "bold",
        lineHeight: 2,
        color: "#66ccff",
      },
    },
  });

  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.left = `${e.clientX}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box
          sx={{
            fontFamily: theme.typography,
            backgroundColor: "#001f2f", // brighter greenish-black
            backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(0, 55, 104, 0.1) 0px,
            rgba(0, 0, 0, 1) 1px,
            transparent 4px,
            transparent 4px
          )`,
          }}
        >
          <RightSideGrid />
        </Box>{" "}
        <div className="cursor-glow" ref={cursorRef}></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
