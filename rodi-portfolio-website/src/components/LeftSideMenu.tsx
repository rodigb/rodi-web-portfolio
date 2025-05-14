import React, { useState, useEffect } from "react";
import { Box, Typography, Button, createTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Link, scroller } from "react-scroll";
import Typewriter from "typewriter-effect";

const LeftSideMenu = () => {
  const [active, setActive] = useState<string>("");
  const sections = ["home", "about", "portfolio", "contact"];
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const theme = createTheme({
    typography: {
      fontFamily: ["Silkscreen"],
    },
  });

  // Handle arrow key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = sections.indexOf(active);

      if (event.key === "ArrowDown") {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % sections.length;
        scrollToSection(sections[nextIndex]);
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        const prevIndex =
          (currentIndex - 1 + sections.length) % sections.length;
        scrollToSection(sections[prevIndex]);
      }
    };

    const scrollToSection = (section: string) => {
      scroller.scrollTo(`${section}-section`, {
        smooth: true,
        duration: 200,
      });
      setActive(section);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active]);

  useEffect(() => {
    const sectionId = `${sections[selectedIndex]}-section`;
    scroller.scrollTo(sectionId, {
      smooth: true,
      duration: 200,
    });
    setActive(sections[selectedIndex]);
  }, [selectedIndex]);

  return (
    <Box
      sx={{
        height: "100vh", // full screen height
        width: "100%",
        display: "flex",
        justifyContent: "center", // horizontal center
        alignItems: "center", // vertical center
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#21be61", lineHeight: 1, mb: 1 }}
          >
            Rodi Gemici-Bektas
          </Typography>
          <Typography
            variant="caption"
            fontFamily={theme.typography.fontFamily}
            textAlign="left"
            sx={{ color: "#21be61", lineHeight: 1, mb: 1 }}
          >
            <Typewriter
              options={{
                strings: [
                  "Front-end Engineer",
                  "UX/UI Enthusiast",
                  "React Developer",
                  "Clean Code Advocate",
                  "API Integrator",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </Typography>
        </Box>

        <Box mt={4}>
          <Link
            to="home-section"
            smooth={true}
            duration={200}
            activeClass="active-link"
            spy={true}
            style={{
              display: "block",
              cursor: "pointer",
              color: active === "home" ? "black" : "#21be61",
              backgroundColor: active === "home" ? "#21be61" : "transparent",
              padding: "5px",
              fontWeight: "bold",
            }}
            onSetActive={() => setActive("home")}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Home
            </Typography>
          </Link>

          <Link
            to="about-section"
            smooth={true}
            duration={200}
            activeClass="active-link" // Add activeClass to highlight the active link
            spy={true} // Keep track of the active section
            style={{
              display: "block",
              cursor: "pointer",
              color: active === "about" ? "black" : "#21be61",
              backgroundColor: active === "about" ? "#21be61" : "transparent",
              padding: "5px",
              fontWeight: "bold",
            }}
            onSetActive={() => setActive("about")}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Experience
            </Typography>
          </Link>

          <Link
            to="portfolio-section"
            smooth={true}
            duration={200}
            activeClass="active-link"
            spy={true}
            style={{
              display: "block",
              cursor: "pointer",
              color: active === "portfolio" ? "black" : "#21be61",
              backgroundColor:
                active === "portfolio" ? "#21be61" : "transparent",
              padding: "5px",
              fontWeight: "bold",
            }}
            onSetActive={() => setActive("portfolio")}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Portfolio
            </Typography>
          </Link>
          <Link
            to="contact-section"
            smooth={true}
            duration={200}
            activeClass="active-link"
            spy={true}
            style={{
              display: "block",
              cursor: "pointer",
              color: active === "contact" ? "black" : "#21be61",
              backgroundColor: active === "contact" ? "#21be61" : "transparent",
              padding: "5px",
              fontWeight: "bold",
            }}
            onSetActive={() => setActive("contact")}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact
            </Typography>
          </Link>
        </Box>
        <Button
          variant="outlined"
          size="large"
          sx={{
            fontWeight: "bold",
            border: "2px solid #21be61",
            color: "#21be61",
            mt: 2,
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
          onClick={() => (window.location.href = "#contact")}
        >
          My CV / Resume
        </Button>
      </motion.div>
    </Box>
  );
};

export default LeftSideMenu;
