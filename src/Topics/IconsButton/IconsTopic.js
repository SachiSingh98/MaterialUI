import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

export default function IconsTopic() {
  return (
    <>
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton>
              <AcUnitIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
