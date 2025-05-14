import React, { useRef, useEffect } from "react";
import "./App.css";
import RightSideGrid from "./components/RightSideGrid.tsx";
import { Box, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Silkscreen"],
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
    <div className="App">
      <Box
        sx={{
          fontFamily: theme.typography,
          backgroundColor: "#072915", // brighter greenish-black
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.1) 0px,
            rgba(0, 0, 0, 1) 1px,
            transparent 4px,
            transparent 8px
          )`,
        }}
      >
        <RightSideGrid />
      </Box>{" "}
      <div className="custom-cursor" ref={cursorRef}></div>
    </div>
  );
}

export default App;
