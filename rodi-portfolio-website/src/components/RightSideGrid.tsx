import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import LeftSideMenu from "./LeftSideMenu.tsx";
import PersonalBio from "./Bio.tsx";
import ExperienceCard from "./card/ExperienceCard.tsx";

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
                height: "100vh", // Ensure full viewport height
                display: "flex", // Enable flexbox
                alignItems: "left", // Vertically center
                justifyContent: "left", // Optional: horizontally center
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
                    height: "100vh",
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
                    height: "100vh",
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
                  id="portfolio-section"
                  sx={{
                    height: "100vh",
                    bgcolor: "lightyellow",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h2">Portfolio Section</Typography>
                </Box>

                <Box
                  id="contact-section"
                  sx={{
                    height: "100vh",
                    bgcolor: "lightgray",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h2">Contact Section</Typography>
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
