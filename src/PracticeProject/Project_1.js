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
  MenuItem
} from "@mui/material";
import {Link} from 'react-router-dom'

export default function Project1() {
  const [tabValue, setTableValue] = useState(0);

  const [open , setopen] = useState(false)
  const [anchor , setanchor] = useState(null)



  
  return (
    <>
      <AppBar sx={{backgroundColor:"black"}} >
        <Toolbar>
        <Link style={{textDecoration:"none" , color:"white"}}>  <Typography  variant="h4">Logo</Typography></Link>

          {/* Tabs and Tab */}
          <Tabs
          className="Tabs"
            sx={{ margin: "auto" }}
            value={tabValue}
            TabIndicatorProps={{ style: { backgroundColor: "white" } }}
          >
          <Link  onClick={()=>setTableValue(0)} to="/"> <Tab  sx={{color:"white"}} label="Home" /> </Link>
           <Link onClick={()=>setTableValue(1)}  to="/about"> <Tab sx={{color:"white"}} label="About" /> </Link>
           <Link  onClick={()=>setTableValue(2)} to="/contact"> <Tab sx={{color:"white"}} label="Contact" /> </Link>
          </Tabs>

          {/* Button */}
          <Button
            className="DashBoardBtn"
            variant="contained"
            sx={{
              backgroundColor: "whitesmoke",
              color: "black",
              fontWeight: "600",
            }}
            onClick={(e)=>{
                setopen(true)
                setanchor(e.currentTarget)
                console.log(e.currentTarget)
            }}
          >
            Admin
          </Button>
          {/* Menu */}
          <Menu anchorEl={anchor} onClick={()=>{setopen(false)}} open={open} >
            <MenuItem>Dashboard</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>

         </>
  );
}
