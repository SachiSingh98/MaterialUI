import React, { useState } from 'react';
import { AppBar, IconButton, Tab, Tabs, Toolbar, Box, Button, useTheme, useMediaQuery } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DrawerComponent from './DrawerComponent';

export default function Nav({ linkArr }) {
  const [tabvalue, setTabValue] = useState(0);
  const theme = useTheme();
  const showMenu = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar sx={{ backgroundColor: "#493287" }}>
        <Toolbar>
          {showMenu ? (
            <>
              <Box>
                <IconButton sx={{ color: "white" }}>
                  <LocalGroceryStoreIcon />
                </IconButton>
              </Box>    


              {/* <Typography marginLeft={"auto"} variant='h5' >Logo</Typography>         */}
            <DrawerComponent  linkArr={linkArr} />
            </>
          ) : (
            <>
              <Box>
                <IconButton sx={{ color: "white" }}>
                  <LocalGroceryStoreIcon />
                </IconButton>
              </Box>

              <Box sx={{ margin: "auto" }}>
                <Tabs TabIndicatorProps={{ style: { background: "white" } }} textColor='inherit' value={tabvalue} onChange={(e, val) => { setTabValue(val) }}>
                  {linkArr.map((data, index) => {
                    return <Tab label={data} key={index} />;
                  })}
                </Tabs>
              </Box>

              <Box>
                <Button sx={{ marginLeft: 1, backgroundColor: "#5a33b0" }} variant='contained'>Login</Button>
                <Button sx={{ marginLeft: 1, backgroundColor: "#5a33b0" }} variant='contained'>Signup</Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
