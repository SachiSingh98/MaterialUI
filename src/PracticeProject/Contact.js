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
  Typography,
} from "@mui/material";

import { InfoContext } from "../Context/InfoContext";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [age , setage] = useState(10)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { data, setdata } = useContext(InfoContext);
  const [gender, setGender] = useState("Female");

  const handleOnSubmit = (formData) => {
    const updatedData = {
      ...formData,
      genders: gender,
    };

    console.log(updatedData);
    setdata([...data, updatedData]);
    console.log("Sdfsd");
  };

  return (
    <>
      <div className="FormDiv">
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <TextField
            name="name"
            type="text"
            error={Boolean(errors.name)}
            variant="outlined"
            // According to this document, a <p></p> tag can only contain inline elements. That means putting a <div></div> tag inside it should be improper, since the div tag is a block element. Improper nesting might cause glitches like rendering extra tags, which can affect your javascript and css

            // The reason of add component to span
            helperText={Boolean(errors.name) ?  <Typography component={"span"} variant="body2" > Name Required</Typography> : null}
            label="Name"
            sx={{ marginTop: 1, width: "100%" }}
            {...register("name", { required: true })}
          />

          <TextField
            name="email"
            type="email"
            variant="outlined"
            label="Email"
            sx={{ marginTop: 1, width: "100%" }}
            {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
          />

          <TextField
            name="password"
            sx={{ marginTop: 1, width: "100%" }}
            type="password"
            variant="outlined"
            label="Password"
            {...register("password")}
          />

          <FormControl style={{ marginTop: "10px", width: "100%" }}>
            <InputLabel>Age</InputLabel>
            <Select
              {...register("age")}
              label="Age"
              value={age}
              name="age"
              onChange={(e)=>{setage(e.target.value)}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel sx={{ mt: 2 }}>Gender</FormLabel>
            <RadioGroup
              sx={{ display: "flex", flexDirection: "row" }}
              {...register("genders")}
              name="genders"
              value={gender}
              onChange={(e) => { setGender(e.target.value) }}
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

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="terms"
                  {...register("terms")}
                  style={{ color: "black" }}
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
