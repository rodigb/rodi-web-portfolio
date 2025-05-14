import React from "react";
import "./App.css";
import RightSideGrid from "./components/RightSideGrid.tsx";
import { Box, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Silkscreen"],
    },
  });
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
      </Box>
    </div>
  );
}

export default App;
