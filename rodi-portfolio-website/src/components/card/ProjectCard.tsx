import React from "react";
import { Box, Typography, Chip, Stack, createTheme } from "@mui/material";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tags,
  link,
}) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Orbitron"],
    },
  });

  const CardContent = (
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
        mt: 10,
        transition: "all 0.3s ease-in-out",
        cursor: link ? "pointer" : "default",
        "&:hover": {
          backgroundColor: "rgba(102, 204, 255, 0.1)",
          boxShadow: link ? "0 0 3px #66ccff" : "none",
          transform: link ? "scale(1.01)" : "none",
        },
        "&:hover .arrow": {
          transform: "translateY(-6px)",
          opacity: 1,
        },
        ".arrow": {
          display: "inline-block",
          marginLeft: "6px",
          transition: "all 0.3s ease-in-out",
          transform: "translateY(0)",
          opacity: 0.6,
        },
      }}
    >
      <Box
        component="img"
        src={image}
        sx={{
          width: 200,
          objectFit: "contain",
          padding: 2,
        }}
      />

      <Box sx={{ minWidth: "140px" }}>
        <Typography sx={{ color: "#ffffff", fontWeight: "bold" }}>
          {title} {link && <span className="arrow">↗</span>}
        </Typography>
        <Typography sx={{ color: "#66ccff" }}>{description}</Typography>

        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          sx={{ mt: 2, alignItems: "flex-start" }}
        >
          {tags.map((tool) => (
            <Chip
              key={tool}
              label={tool}
              sx={{
                backgroundColor: "#66ccff",
                color: "#000",
                fontSize: "1rem",
                fontFamily: `${theme.typography.fontFamily}`,
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
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      {CardContent}
    </a>
  ) : (
    CardContent
  );
};

export default ProjectCard;
