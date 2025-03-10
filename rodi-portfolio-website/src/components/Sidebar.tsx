import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }}>
      {/* Close Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
        <IconButton
          sx={{
            color: "black",
            "&:hover": {
              opacity: 0.6, // Fades when hovered
            },
          }}
          onClick={toggleDrawer(false)}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Drawer Menu List */}
      <List>
        {["Home", "About", "Portfolio", "Contact"].map((text) => (
          <ListItem sx={{}} key={text} disablePadding>
            <ListItemButton
              disableRipple
              component={Link}
              to={`/${text.toLowerCase()}`}
              onClick={toggleDrawer(false)}
              sx={{
                height: "25px",
                mt: "10px",
                "&:hover": {
                  backgroundColor: "transparent",
                  opacity: 0.6, // Fades when hovered
                },
              }}
            >
              <ListItemText
                slotProps={{
                  primary: { sx: { fontWeight: "bold", pl: "50px" } },
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          gap: "10px",
          bgcolor: "rgb(32, 32, 32)",
        }}
      >
        <IconButton
          sx={{
            color: "white",
            "&:hover": {
              opacity: 0.6, // Fades when hovered
            },
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography sx={{ fontWeight: "bold", color: "white" }}>
          Rodi Gemici.
        </Typography>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
