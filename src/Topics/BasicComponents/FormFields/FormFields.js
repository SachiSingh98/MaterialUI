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
  FormLabel,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";

export default function FormFields() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    select: 10,
    genders:''
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
      <form  style={{ display: "flex", flexDirection: "column"  , padding:"10px 20px"}}>
        <TextField
          name="name"
          type="text"
          onChange={handleOnChange}
          variant="filled"
          placeholder="Name"
          sx={{marginTop:1}}
        />
        <TextField
          name="email"
          type="email"
          onChange={handleOnChange}
          variant="outlined"
          placeholder="Email"
          sx={{marginTop:1}}
        />
        <TextField
          name="password"
          sx={{marginTop:1}}
          type="password"
          onChange={handleOnChange}
          variant="standard"
          placeholder="Password"
        />

        {/*------------------------------------------------------------------- Select boxes -------------------------------*/}
        <FormControl sx={{marginTop:1}}>
          <InputLabel>Age</InputLabel>
          <Select name="select" label="Age" value={value.select} onChange={handleOnChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        {/* ------------------------------------------------------------Radio------------------------------------------------- */}
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup defaultValue="Female" onChange={handleOnChange} name="genders">
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        {/*--------------------------------------------- Check Boxes --------------------------------------*/}
        <FormGroup>
          <FormControlLabel
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
          onClick={handleOnSubmit}
          variant="contained"
        >
          Get Data
        </Button>
      </form>

      <Typography margin={3}>
        Name : {data.name} <br />
        Email : {data.email} <br />
        Password : {data.password} <br />
        Age : {data.select} <br />
        Gender : {data.genders} <br/>
        Terms & Condition : {data.terms ? "Agree" : null}
      </Typography>
    </>
  );
}
