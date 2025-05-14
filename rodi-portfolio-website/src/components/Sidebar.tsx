import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

type SidebarProps = {
  currentSection: string;
};
export default function Sidebar({ currentSection }: SidebarProps) {
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          width: "100vw",
          display: "flex",
          alignItems: "center",
          bgcolor: "rgb(32, 32, 32)",
          zIndex: 1000,
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            left: "50%",
            mt: "30px", // margin-top for spacing from the top

            transform: "translateX(-50%)",
            fontWeight: "bold",
            color: "white",
            transition: "opacity 0.5s ease",
            opacity: 1,
          }}
        >
          {currentSection}
        </Typography>
      </Box>
    </>
  );
}
