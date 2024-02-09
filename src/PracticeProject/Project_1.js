import React, { useState } from "react";
import "./Project1.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Menu
} from "@mui/material";

export default function Project1() {
  const [tabValue, setTableValue] = useState(0);
  const [age, setAge] = useState(10);
  const [open , setopen] = useState(false)
  const [anchor , setanchor] = useState(null)
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">Enablero</Typography>

          {/* Tabs and Tab */}
          <Tabs
            sx={{ margin: "auto" }}
            textColor="inherit"
            value={tabValue}
            onChange={(el, val) => {
              setTableValue(val);
            }}
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
            <Tab label="Services" />
          </Tabs>

          {/* Button */}
          <Button
            className="DashBoardBtn"
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#1976D2",
              fontWeight: "600",
            }}
            onClick={(e)=>{
                setopen(true)
                setanchor(e.currentTarget)
                console.log(e.currentTarget)
            }}
          >
            Profile
          </Button>
          {/* Menu */}
          <Menu anchorEl={anchor} onClick={()=>{setopen(false)}} open={open} >
            <MenuItem>Dashboard</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>

      {/* ---------------------Form here------------------------- */}

      <div className="FormDiv">
        <form>
          <TextField
            style={{ marginTop: "10px" }}
            type="text"
            label="Name"
            fullWidth
          />

          <TextField
            style={{ marginTop: "10px" }}
            type="email"
            label="Email"
            fullWidth
          />

          <TextField
            style={{ marginTop: "10px" }}
            type="number"
            label="Contact"
            fullWidth
          />

          <TextField
            style={{ marginTop: "10px" }}
            type="password"
            label="Password"
            fullWidth
          />

          {/* ----Select Fileds */}
          <FormControl style={{ marginTop: "10px" }} fullWidth>
            <InputLabel>Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={age}
              label="Age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          {/* -------------------------------------------------MenuItem */}

          {/* Check Box */}
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="terms" />}
              label="Agree to terms"
              name="termsandcondition"
            />
          </FormGroup>

          <Button style={{ marginTop: "20px" }} fullWidth variant="contained">
            Submit
          </Button>


        </form>
      </div>
    </>
  );
}
