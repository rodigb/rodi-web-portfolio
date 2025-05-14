import React from "react";
import { Box, Typography, Chip, Stack, createTheme } from "@mui/material";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  stars?: number;
  tags: string[];
  link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  stars,
  tags,
  link,
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
      {/* Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: 130,
          height: "auto",
          borderRadius: 1,
          objectFit: "cover",
        }}
      />

      {/* Content */}
      <Box sx={{ minWidth: "140px" }}>
        <Typography
          sx={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            color: "#21be61",
            fontFamily: `${theme.typography.fontFamily}`,
          }}
        >
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              {title} ↗
            </a>
          ) : (
            title
          )}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.8rem",
            color: "#21be61",
            fontFamily: `${theme.typography.fontFamily}`,
          }}
        >
          {description}
        </Typography>

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
          {tags.map((tool) => (
            <Chip
              key={tool}
              label={tool}
              sx={{
                backgroundColor: "#21be61",
                color: "#000",
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: `${theme.typography.fontFamily}`,
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
};

export default ProjectCard;
