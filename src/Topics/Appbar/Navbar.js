import React, { useState } from "react";
import { Tabs, Tab, AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  // The app bar component is like nav tag in html and the toolbar helps to add the information in a systematic way to it can be in a flex manner.
  const [tabValue, setTableValue] = useState(0);
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">Logo</Typography>

          {/* Tabs and Tab */}
          <Tabs 
          sx={{marginLeft:"auto"}}
            value={tabValue}
            indicatorColor="primary"
            textColor="inherit"
            onChange={(e, val) => setTableValue(val)}
          >
            <Tab label="First" />
            <Tab label="Second" />
            <Tab label="Third" />

          </Tabs>

          <Button variant="contained" sx={{ marginLeft: "auto" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
