import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import LeftSideMenu from "./LeftSideMenu.tsx";
import PersonalBio from "./Bio.tsx";
import ExperienceCard from "./card/ExperienceCard.tsx";
import ProjectCard from "./card/ProjectCard.tsx";
import ZeissImage from "../images/zeiss.png";
import Dtime from "../images/dtime.png";
import Azzab from "../images/ecommerce.png";
import ProjectEarth from "../images/3js.png";
import PortfolioV1 from "../images/portfoliov1.png";
import GymApp from "../images/gymapp.png";
import NavApp from "../images/navapp.png";
import AlarmClock from "../images/alarmclock.png";
import RodiCv from "../static/rodicv.pdf";
import HyperBoard from "../images/hyperboard.png";

const RightSideGrid = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Container
              maxWidth={false}
              disableGutters
              sx={{
                position: "sticky",
                top: 0,
                height: "100vh",
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
              }}
            >
              <LeftSideMenu />
            </Container>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container maxWidth={false} disableGutters>
              <div>
                <Box
                  id="home-section"
                  sx={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PersonalBio />
                </Box>

                <Box
                  id="about-section"
                  sx={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <ExperienceCard
                    title={"Carl Zeiss"}
                    jobTitle={"Front-End Engineer"}
                    description={
                      "Built responsive, scalable applications using React, TypeScript, and MUI based on Figma designs. Integrated RESTful APIs, implemented UI components with Redux, and maintained quality through Jest testing. Collaborated in an agile team using Azure DevOps for version control, CI/CD, and sprint management."
                    }
                    tools={[
                      "React",
                      "TypeScript",
                      "MUI",
                      "Figma",
                      "RESTful APIs",
                      "Redux",
                      "Jest",
                      "Azure DevOps",
                      "Git",
                    ]}
                    date={"2022 - Present"}
                  />

                  <ExperienceCard
                    title={"DTIME"}
                    jobTitle={"Full-stack web engineer"}
                    description={
                      "Built web-based data querying and dashboard applications using Python and JavaScript. Developed both frontend and backend systems, including energy monitoring dashboards and a data search portal for querying and downloading public datasets. Utilized GCP services like BigQuery and CloudSQL for data handling and deployment. Collaborated in an agile team using GitLab for version control and project coordination."
                    }
                    tools={[
                      "Python",
                      "JavaScript",
                      "GCP",
                      "HTML",
                      "CSS",
                      "GitLab",
                      "cloudSQL",
                    ]}
                    date={"Aug 2021 - Feb 2022"}
                  />
                </Box>
                <Box
                  sx={{
                    wdith: "100%",
                    mt: 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    textAlign={"left"}
                    sx={{
                      color: "white",
                      opacity: 0.6,
                      "&:hover": {
                        opacity: 1,
                        color: "white",
                      },
                      "&:hover .arrow": {
                        transform: "translateY(-6px)",
                        opacity: 1,
                        color: "white",
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
                    <a
                      href={RodiCv}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        display: "block",
                        color: "white",
                      }}
                    >
                      View My Full CV here <span className="arrow">↗</span>
                    </a>
                  </Typography>
                </Box>
                <Divider sx={{ my: 2, borderColor: "#66ccff", opacity: 0.3 }} />

                <Box
                  id="portfolio-section"
                  sx={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <ProjectCard
                    title={"CinCraft Scenario and Xport"}
                    image={ZeissImage}
                    description={
                      "During my time at Carl Zeiss, I helped develop the front end of CinCraft Scenario and Xport applications as well as with the connection to the backend."
                    }
                    tags={[
                      "React",
                      "TypeScript",
                      "MUI",
                      "Figma",
                      "RESTful APIs",
                      "Redux",
                      "Jest",
                      "Azure DevOps",
                      "Git",
                    ]}
                    link={"https://cincraft.zeiss.com/us/cincraft-scenario"}
                  />
                  <ProjectCard
                    title={"Dtime Data Search Portal"}
                    image={Dtime}
                    description={
                      "During my time at Dtime, I helped develop a data search portal for querying, searching, filtering and downloading of public datasets via an API to form JSON objects using Python, JavaScript, HTML and CSS with a team using agile software development."
                    }
                    link={"https://dtechtive.com/home"}
                    tags={["HTML", "CSS", "JavaScript", "Python"]}
                  />

                  <ProjectCard
                    title={"Hyperliquid Analytics Dashboard (Blockchain)"}
                    image={HyperBoard}
                    description={
                      "A real-time analytics dashboard for the Hyperliquid ecosystem, featuring interactive charts, protocol TVL rankings, derivatives volume tracking, and token metrics. Developed with Next.js and TypeScript, styled with Material UI, and powered by live DeFi API integrations for a modern onchain data experience."
                    }
                    link={"https://hyperevm-proj-rgb.vercel.app"}
                    tags={[
                      "Next.js",
                      "TypeScript",
                      "Material UI",
                      "Recharts",
                      "DeFi APIs",
                      "Blockchain",
                      "Web3",
                    ]}
                  />

                  <ProjectCard
                    title={"E-Commerce Website"}
                    image={Azzab}
                    description={
                      "E-Commerce peer-to-peer trading website, with live chat and messaging systems where users can create their accounts to upload products and list them for sale. Uses HTML, CSS, PHP and mySQL."
                    }
                    link={"https://github.com/rodigb/e-commerce_website"}
                    tags={["HTML", "CSS", "PHP", "mySQL"]}
                  />
                  <ProjectCard
                    title={"Project Earth"}
                    image={ProjectEarth}
                    description={
                      "This was a fun project that utilizes threeJS to display animated 3D computer graphics. In my project you can find a 3D design of our planet, moon and sun."
                    }
                    link={"https://rodigb.github.io/project-earth/"}
                    tags={["JavaScript", "threeJS"]}
                  />
                  <ProjectCard
                    title={"My Portfolio Website V1"}
                    image={PortfolioV1}
                    description={
                      "This website was created to act as my first online portoflio. Utilized ReactJS."
                    }
                    link={"https://github.com/rodigb/portfolio-website-rodi"}
                    tags={["JavaScript", "ReactJS", "HTML", "CSS"]}
                  />
                  <ProjectCard
                    title={"Gym Tracking App"}
                    image={GymApp}
                    description={
                      "Developed a mobile application that tracked gym progress such as lifts, with notifications and allows you to compare your lifts to strength standard levels. Utilized Java."
                    }
                    link={"https://github.com/rodigb/Gym-Tracking-App"}
                    tags={["Java"]}
                  />
                  <ProjectCard
                    title={"Navigation Application"}
                    image={NavApp}
                    description={
                      "A navigation application, where you can add roads, remove roads, add users and compute how much energy is required to reach the destination that utilizes OOP with Java."
                    }
                    link={"https://github.com/rodigb/NavigationApp/"}
                    tags={["Java"]}
                  />
                  <ProjectCard
                    title={"Alarm Clock"}
                    image={AlarmClock}
                    description={
                      "Arduino programmed as an alarm clock / timer. You can set a timer, where the alarm will change colour to red when the time is reached. Can be snoozed or turned off. Utilized C++."
                    }
                    link={"https://github.com/rodigb/Gym-Tracking-App"}
                    tags={["C++"]}
                  />
                </Box>

                <Box
                  id="contact-section"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 5,
                  }}
                >
                  <Typography variant="caption" textAlign="left">
                    Coded in{" "}
                    <a
                      href="https://code.visualstudio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#66ccff",
                        borderBottom: "1px dashed #66ccff",
                        paddingBottom: "1px",
                        textDecoration: "none",
                      }}
                    >
                      Visual Studio Code
                    </a>{" "}
                    using{" "}
                    <a
                      href="https://mui.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#66ccff",
                        borderBottom: "1px dashed #66ccff",
                        paddingBottom: "1px",
                        textDecoration: "none",
                      }}
                    >
                      MUI
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#66ccff",
                        borderBottom: "1px dashed #66ccff",
                        paddingBottom: "1px",
                        textDecoration: "none",
                      }}
                    >
                      ReactJS
                    </a>
                    .
                  </Typography>
                </Box>
              </div>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RightSideGrid;
