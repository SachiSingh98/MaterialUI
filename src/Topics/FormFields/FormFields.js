import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";

export default function FormFields() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    select:0
  });
  const [data, setdata] = useState("No Data");

  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setdata(value);
    console.log(value);
  };

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          name="name"
          type="text"
          onChange={handleOnChange}
          variant="filled"
          placeholder="Name"
          sx={{ margin: 3 }}
        />
        <TextField
          name="email"
          type="email"
          onChange={handleOnChange}
          variant="outlined"
          placeholder="Email"
          sx={{ margin: 3 }}
        />
        <TextField
          name="password"
          type="password"
          onChange={handleOnChange}
          variant="standard"
          placeholder="Password"
          sx={{ margin: 3 }}
        />

        {/* Select boxes */}
        <FormControl style={{margin:"5px"}} >
          <InputLabel>Age</InputLabel>
          <Select  name="select" label="Age" onChange={handleOnChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        {/*--------------------------------------------- Check Boxes --------------------------------------*/}
        <FormGroup>
          <FormControlLabel
            sx={{ margin: "5px" }}
            control={
              <Checkbox
                name="terms"
                onChange={(e) => {
                  setValue({ ...value, terms: e.target.checked });
                }}
              />
            }
            label="Agree to terms"
            name="termsandcondition"
          />
        </FormGroup>

        <Button
          type="Submit"
          sx={{ margin: "5px" }}
          onClick={handleOnSubmit}
          variant="contained"
        >
          Get Data
        </Button>
      </form>

      <Typography margin={3}>
       Name :  {data.name} <br />
       Email :  {data.email} <br />
       Password : {data.password} <br />
        Age : {data.select} <br/>
       Terms & Condition : {data.terms ? "Agree" : null}
      </Typography>
    </>
  );
}
