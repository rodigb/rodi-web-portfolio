import React from "react";
import { Box, Typography, Stack, createTheme, Chip } from "@mui/material";

const ExperienceCard = ({
  title,
  description,
  jobTitle,
  tools = [],
  date,
}: {
  title: string;
  jobTitle: string;
  description: string;
  tools: Array<string>;
  date: string;
}) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Orbitron"],
    },
  });
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
          p: 2,
          backgroundColor: "transparent",
          maxWidth: 900,
          width: "100%",
          lineHeight: 1.6,
          textAlign: "left",
          mt: 15,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "rgba(102, 204, 255, 0.1)",
            boxShadow: "0 0 3px #66ccff",
            transform: "scale(1.01)",
          },
        }}
      >
        {/* Left column: Date */}
        <Box sx={{ minWidth: "140px" }}>
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontFamily: `${theme.typography.fontFamily}`,
            }}
          >
            {date}
          </Typography>
        </Box>
        {/* Right column: Title, description, tools */}
        <Box>
          {/* Title */}
          <Typography
            sx={{
              fontSize: "1.6rem",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
            }}
          >
            {jobTitle}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.8rem",
              mt: 1,
            }}
          >
            {description}
          </Typography>
          {/* Tools */}
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
            sx={{
              mt: 2,
              alignItems: "flex-start",
            }}
          >
            {tools.map((tool) => (
              <Chip
                key={tool}
                label={tool}
                sx={{
                  backgroundColor: "#66ccff",
                  color: "#000",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "2px",
                  height: "auto",
                  paddingY: "2px",
                  paddingX: "8px",
                  ".MuiChip-label": {
                    padding: 0,
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ExperienceCard;
