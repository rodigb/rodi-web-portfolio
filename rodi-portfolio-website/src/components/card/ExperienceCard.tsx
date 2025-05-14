import React from "react";
import { Box, Typography, Stack, createTheme } from "@mui/material";

const ExperienceCard = ({
  title,
  description,
  jobTitle,
  tools = [],
  date = "DATE",
}: {
  title: string;
  jobTitle: string;
  description: string;
  tools: Array<string>;
  date: string;
}) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Silkscreen"],
    },
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 3,
        backgroundColor: "transparent",
        color: "#21be61",
        maxWidth: 900,
        width: "100%",
        lineHeight: 1.6,
        textAlign: "left",
        mt: 10,
      }}
    >
      {/* Left column: Date */}
      <Box sx={{ minWidth: "140px" }}>
        <Typography
          sx={{
            fontSize: "1.2rem",
            color: "#21be61",
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
            fontWeight: "bold",
            color: "#21be61",
            fontFamily: `${theme.typography.fontFamily}`,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#21be61",
            fontFamily: `${theme.typography.fontFamily}`,
          }}
        >
          {jobTitle}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: "0.8rem",
            mt: 1,
            fontFamily: `${theme.typography.fontFamily}`,
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
            <Box
              key={tool}
              component="span"
              sx={{
                backgroundColor: "#21be61",
                color: "#000",
                px: 2,
                py: "2px",
                fontSize: "1rem",
                fontWeight: "bold",
                fontFamily: `${theme.typography.fontFamily}`,
                display: "inline-block",
                marginBottom: "8px", // ensures spacing between wrapped rows
              }}
            >
              {tool}
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ExperienceCard;
