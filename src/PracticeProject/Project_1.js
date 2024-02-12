import React, { useState } from "react";
import "./Project1.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  Box,
  Drawer,
  ListItemButton,
  ListItemText,
  List,
  ListItem,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Project1() {
  const [tabValue, setTableValue] = useState(0);
  const [open, setopen] = useState(false);
  const [anchor, setanchor] = useState(null);
  const [SideNav, setSideNav] = useState(false);


  return (
    <>
      <AppBar sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Box className="MainLogo">
            <Typography
              component={Link}
              to="/"
              sx={{ color: "white", textDecoration: "none" }}
              variant="h4"
            >
              Logo
            </Typography>
          </Box>
          {/* -----Hamburger----- */}
          <Box className="HamburgerBtn">
            {" "}
            <Button
              onClick={() => {
                setSideNav(true);
              }}
              variant="contained"
            >
              Ham
            </Button>{" "}
          </Box>

          {/* Tabs and Tab */}
          <Box className="TabsBox" sx={{ margin: "auto" }}>
            <Tabs
              className="TabsV"
              value={tabValue}
              TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}
            >
              <Tab
                component={Link}
                to="/"
                onClick={() => setTableValue(0)}
                style={{ color: "white" }}
                label="Home"
              />
              <Tab
                component={Link}
                to="/about"
                onClick={() => setTableValue(1)}
                style={{ color: "white" }}
                label="About"
              />
              <Tab
                component={Link}
                to="/contact"
                onClick={() => setTableValue(2)}
                style={{ color: "white" }}
                label="Contact"
              />
            </Tabs>
          </Box>

          {/* Mobile View */}
          <Typography
            className="MobileViewLogo"
            component={Link}
            to="/"
            sx={{ color: "white", textDecoration: "none", margin: "auto" }}
            variant="h4"
          >
            Logo
          </Typography>

          {/* Button */}
          <Button
            className="DashBoardBtn"
            variant="contained"
            sx={{
              backgroundColor: "whitesmoke",
              color: "black",
              fontWeight: "600",
            }}
            onClick={(e) => {
              setopen(true);
              setanchor(e.currentTarget);
              console.log(e.currentTarget);
            }}
          >
            Admin
          </Button>
          {/* Menu */}
          <Menu
            anchorEl={anchor}
            onClick={() => {
              setopen(false);
            }}
            open={open}
          >
            <MenuItem component={Link} to="/contactinfo" >Dashboard</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        onClick={() => {
          setSideNav(false);
        }}
        open={SideNav}
      >
        <Box sx={{ padding: "5px" , textAlign:"center" , fontWeight:"700" }}>
          <Typography style={{color:"black" , textDecoration:"none"}} component={Link} to='/' variant="h4" fontWeight={700} >Logo</Typography>
        </Box>

        <List >
          <ListItem component={Link} to='/' sx={{backgroundColor:"whitesmoke" , color:"black" , mt:1}}>
            <ListItemButton>
              <ListItemText   sx={{margin:"0px 10px"}}>Home</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem component={Link} to='/about' sx={{backgroundColor:"whitesmoke" , color:"black" , mt:1}}>
            <ListItemButton>
              <ListItemText  sx={{margin:"0px 10px"}}>About</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem component={Link} to='/contact' sx={{backgroundColor:"whitesmoke" , color:"black" , mt:1}} > 
            <ListItemButton>
              <ListItemText  sx={{margin:"0px 10px"}} >Contact</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
