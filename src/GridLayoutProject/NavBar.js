import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Tabs,
  Tab,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Drawers from "./Drawers";

export default function NavBar({ linksArr }) {
    const theme = useTheme()
    const showMenu = useMediaQuery(theme.breakpoints.down("sm"))
  const [value, setValue] = useState(0);
  return (
    <>
      <AppBar
        sx={{
          background:
            "linear-gradient(90deg, rgba(79,71,212,1) 0%, rgba(123,123,251,1) 35%, rgba(9,128,255,1) 95%, rgba(0,212,255,1) 100%);",
        }}
      >
        <Toolbar>
        <Typography variant="h4">Logo</Typography>
            {showMenu ? <Drawers linksArr={linksArr} /> :   <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={2}>
              <Typography variant="h4">Logo</Typography>
            </Grid>

            <Grid item xs={6}>
              <Tabs
                textColor="inherit"
                indicatorColor="secondary"
                value={value}
                onChange={(e, val) => {
                  setValue(val);
                }}
              >
                {linksArr.map((data, index) => {
                  return <Tab key={index} label={data} />;
                })}
              </Tabs>
            </Grid>

            <Grid xs={1}></Grid>

            <Grid item xs={3}>
              <Box sx={{ display: "flex" }}>
                <Button
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                  color="primary"
                >
                  Admin
                </Button>

                <Button
                  sx={{ marginLeft: 1 }}
                  variant="contained"
                  color="primary"
                >
                  Logout
                </Button>

                {/* Hamburger icon */}
                {/* {showMenu ? <Drawers linksArr={linksArr} /> : null} */}
                
              </Box>
            </Grid>
          </Grid>}
        </Toolbar>
      </AppBar>
    </>
  );
}
