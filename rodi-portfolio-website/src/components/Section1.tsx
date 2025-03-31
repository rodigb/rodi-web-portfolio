import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion"; // Optional for smooth animations
import Typewriter from "typewriter-effect"; // Import Typewriter library

// Optional: Add some animations with Framer Motion if you like.
const HomePage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      {/* Hero Section */}
      <Box maxWidth="100vw" sx={{ height: "100vh", p: 5 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{ fontWeight: "bold" }}
              >
                Hello,
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                sx={{ fontWeight: "bold" }}
              >
                My Name Is Rodi Gemici.
              </Typography>

              <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
                <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
                  <Typewriter
                    options={{
                      strings: [
                        "Front end engineer.",
                        "Proficient in creating clean, user-friendly interfaces with a focus on UX/UI design.",
                        "Integrating APIs and third-party services to enhance web functionality.",
                        "Passionate about writing clean, maintainable code.",
                        "Skilled in building responsive and dynamic websites using modern front-end technologies like React, Vue, and Angular.",
                      ],

                      autoStart: true,
                      loop: true,
                      delay: 50, // Adjust the typing speed (lower value = faster typing)
                    }}
                  />
                </Typography>
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                sx={{
                  mt: 3,
                  fontWeight: "bold",
                  border: "2px solid black",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "black", // Change the background to black on hover
                    color: "white", // Change the text color to white for contrast
                  },
                }}
                onClick={() => (window.location.href = "#contact")}
              >
                My CV / Resume
              </Button>
            </motion.div>
          </Grid>{" "}
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
