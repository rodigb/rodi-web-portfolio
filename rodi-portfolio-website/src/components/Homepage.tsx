import React from "react";
import { Box } from "@mui/material";
import Section1 from "./Section1.tsx";

// Optional: Add some animations with Framer Motion if you like.
const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Section1 />
    </Box>
  );
};

export default HomePage;
