import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion"; // Optional for smooth animations

// Optional: Add some animations with Framer Motion if you like.
const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Hero Section */}
      {/* About Section */}
      <Box sx={{ py: 10, backgroundColor: "#fff" }} id="about">
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                I'm a full stack developer with experience building web
                applications using modern technologies like React, Node.js, and
                MongoDB. I love solving complex problems and creating intuitive,
                user-friendly interfaces. I am passionate about learning new
                skills and improving my craft.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Optional: Image or icon */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src="/about-image.jpg" // Replace with your image
                  alt="About Me"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box sx={{ py: 10 }} id="skills">
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
            My Skills
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Typography variant="h6" align="center">
                Front-End
              </Typography>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS / SASS</li>
                <li>Material UI</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" align="center">
                Back-End
              </Typography>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" align="center">
                Tools & Others
              </Typography>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>CI/CD</li>
                <li>API Design</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
