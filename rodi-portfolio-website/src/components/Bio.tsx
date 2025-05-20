import React from "react";
import { Box, createTheme, Typography } from "@mui/material";

const PersonalBio = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Orbitron"],
      allVariants: {
        lineHeight: 2,
      },
    },
  });
  return (
    <>
      <Box>
        <Typography variant="body2" textAlign={"left"}>
          I'm a developer driven by a passion for crafting intuitive,
          pixel-perfect user interfaces that seamlessly fuse thoughtful design
          with solid engineering. My work focuses on the intersection of design
          and development, creating experiences that balance visual appeal with
          performance and usability.
        </Typography>

        <Typography sx={{ marginTop: 3 }} variant="body2" textAlign={"left"}>
          I'm currently working as a Front-End Engineer, where I contribute to
          the development and maintenance of UI components that support digital
          platforms. I collaborate closely with backend teams to integrate APIs
          and services, ensuring seamless data flow and functionality. My work
          also prioritizes web accessibility standards and best practices to
          deliver inclusive, high-quality user experiences.
        </Typography>
        <Typography sx={{ marginTop: 3 }} variant="body2" textAlign={"left"}>
          I've had the opportunity to work and develop software from{" "}
          <strong
            style={{
              color: "#66ccff",
              borderBottom: "1px dashed #66ccff",
              paddingBottom: "1px",
            }}
          >
            startups
          </strong>{" "}
          to{" "}
          <strong
            style={{
              color: "#66ccff",
              borderBottom: "1px dashed #66ccff",
              paddingBottom: "1px",
            }}
          >
            large corporations
          </strong>
          . Additionally, I also{" "}
          <strong
            style={{
              color: "#66ccff",
              borderBottom: "1px dashed #66ccff",
              paddingBottom: "1px",
            }}
          >
            tutored
          </strong>{" "}
          and helped students understand core Front-End technologies.
        </Typography>
        <Typography sx={{ marginTop: 3 }} variant="body2" textAlign={"left"}>
          When I am not coding, you can probably find me lifting weights,
          playing football, or exploring London.
        </Typography>
      </Box>
    </>
  );
};

export default PersonalBio;
