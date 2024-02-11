import React, { useContext, useState } from "react";
import {
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

import { InfoContext } from "../Context/InfoContext";

export default function Contact() {
  const [age, setAge] = useState(10);
  const { data, setdata } = useContext(InfoContext);
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    age: age,
    genders: "",
  });

  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setdata([...data, value]);
    console.log(value);
    setValue({
      name: "",
      email: "",
      password: "",
    });
    setAge(10);
  };

  return (
    <>
      {/* ---------------------Form here------------------------- */}

      <div className="FormDiv">
        <form onSubmit={handleOnSubmit}>
          <TextField
            name="name"
            type="text"
            onChange={handleOnChange}
            variant="outlined"
            label="Name"
            value={value.name || ""}
            sx={{ marginTop: 1, width: "100%" }}
          />

          <TextField
            name="email"
            type="email"
            onChange={handleOnChange}
            variant="outlined"
            label="Email"
            value={value.email || ""}
            sx={{ marginTop: 1, width: "100%" }}
          />

          <TextField
            name="password"
            sx={{ marginTop: 1, width: "100%" }}
            type="password"
            onChange={handleOnChange}
            variant="outlined"
            label="Password"
            value={value.password || ""}
          />

          {/* ----Select Fileds */}
          <FormControl style={{ marginTop: "10px", width: "100%" }}>
            <InputLabel>Age</InputLabel>
            <Select
              value={value.age || ""}
              name="age"
              label="Age"
              onChange={(e) => {
                setValue({ ...value, age: e.target.value });
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          {/* -------------------------------------------------MenuItem */}
          {/* ------------------------------------------------------------Radio------------------------------------------------- */}
          <FormControl>
            <FormLabel sx={{ mt: 2 }}>Gender</FormLabel>
            <RadioGroup
              sx={{ display: "flex", flexDirection: "row" }}
              defaultValue="Female"
              onChange={handleOnChange}
              name="genders"
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          {/*--------------------------------------------- Check Boxes --------------------------------------*/}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="terms"
                  style={{ color: "black" }}
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
            type="submit"
            style={{
              marginTop: "20px",
              color: "white",
              backgroundColor: "black",
            }}
            sx={{ width: "100%" }}
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
