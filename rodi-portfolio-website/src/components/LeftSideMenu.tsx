import React, { useState, useEffect } from "react";
import { Box, Typography, Button, createTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Link, scroller } from "react-scroll";
import Typewriter from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RodiCv from "../static/rodicv.pdf";

const LeftSideMenu = () => {
  const [active, setActive] = useState<string>("");
  const sections = ["home", "about", "portfolio", "contact"];
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

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
            sx={{ color: "#25d46c", lineHeight: 1, mb: 1 }}
          >
            Rodi Gemici-Bektas
          </Typography>
          <Typography
            variant="caption"
            textAlign="left"
            sx={{ color: "#66ccff", lineHeight: 1, mb: 1 }}
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
              color: active === "home" ? "black" : "#66ccff",
              backgroundColor: active === "home" ? "#66ccff" : "transparent",
              padding: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onSetActive={() => setActive("home")}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ color: active === "home" ? "black !important" : "25d46c" }}
            >
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
              color: active === "about" ? "black" : "#66ccff",
              backgroundColor: active === "about" ? "#66ccff" : "transparent",
              padding: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onSetActive={() => setActive("about")}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ color: active === "about" ? "black !important" : "25d46c" }}
            >
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
              color: active === "portfolio" ? "black" : "#66ccff",
              backgroundColor:
                active === "portfolio" ? "#66ccff" : "transparent",
              padding: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onSetActive={() => setActive("portfolio")}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{
                color: active === "portfolio" ? "black !important" : "25d46c",
              }}
            >
              Portfolio
            </Typography>
          </Link>
        </Box>
        <Button
          variant="outlined"
          size="large"
          href={RodiCv}
          target="_blank"
          sx={{
            fontWeight: "bold",
            border: "2px solid #66ccff",
            color: "#66ccff",
            mt: 2,
            "&:hover": {
              backgroundColor: "#66ccff",
              color: "white",
            },
          }}
        >
          My CV / Resume
        </Button>
        <Box mt={4} display="flex" justifyContent="center" gap={3}>
          <a
            href="https://github.com/rodigb"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              outline: "none",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <GitHubIcon sx={{ fontSize: 24, color: "#66ccff" }} />
          </a>

          <a
            href="https://uk.linkedin.com/in/rodi-gemici-5b792a182"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              outline: "none",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <LinkedInIcon sx={{ fontSize: 24, color: "#66ccff" }} />
          </a>
        </Box>
      </motion.div>
    </Box>
  );
};

export default LeftSideMenu;
