import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const projects = [
  {
    title: "Portfolio Website",
    image: "/project1.jpg", // Replace with real image
    description: "Personal portfolio built with React and MUI.",
  },
  {
    title: "E-commerce App",
    image: "/project2.jpg",
    description: "Full-stack e-commerce site with Stripe and Firebase.",
  },
  {
    title: "Landing Page",
    image: "/project3.jpg",
    description: "Marketing landing page with responsive design.",
  },
  {
    title: "Dashboard UI",
    image: "/project4.jpg",
    description: "Custom dashboard with charts and theme support.",
  },
];

const MyWorkSection = () => {
  return (
    <Box
      id="my-work"
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 8 },
        backgroundColor: "#fafafa",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        My Work
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyWorkSection;
