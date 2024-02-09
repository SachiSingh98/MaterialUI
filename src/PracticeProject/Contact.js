import React, { useState } from "react";
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
  Container,
  Typography,
  Box,
  Card,
  FormLabel,
  RadioGroup,
  Radio
} from "@mui/material";

export default function Contact() {
  const [age, setAge] = useState(10);
  const [showData, setShowData] = useState(false);

  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    age: 10,
    genders: "",
  });
  const [data, setdata] = useState([]);

  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setdata([...data, value]);
    setShowData(true);
  };


  const handleOnDelete = (i)=>{
    const filterData = data.filter((data,index)=>{
        return index !== i
    })
    setdata(filterData)
    setShowData(true)
  }
  return (
    <>
      {/* ---------------------Form here------------------------- */}

      {showData ? (
        <Container sx={{ marginTop: "100px" }}>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <Box key={index}>
                <Card sx={{padding:"10px" , margin:"10px 0px"}} >
                    <Typography>
                        Name : {item.name}
                    </Typography>

                    <Typography>
                        Email : {item.email}
                    </Typography>

                    <Typography>
                        Password : {item.password}
                    </Typography>

                    <Typography>
                        Age : {item.age}
                    </Typography>

                    <Typography>
                        Gender : {item.genders}
                    </Typography>

                    <Button onClick={()=>{handleOnDelete(index)}} sx={{marginTop:"5px"}} variant="contained">
                        Delete
                    </Button>
                </Card>
              </Box>
            ))
          ) : (
            <Typography>No Data</Typography>
          )}

          <Button
            variant="contained"
            onClick={() => {
              setShowData(false);
            }}
          >
            Back
          </Button>
        </Container>
      ) : (
        <div className="FormDiv">
          <form onSubmit={handleOnSubmit}>
            <TextField
              name="name"
              type="text"
              onChange={handleOnChange}
              variant="outlined"
              label="Name"
              fullWidth
              sx={{ marginTop: 1 }}
            />

            <TextField
              name="email"
              type="email"
              onChange={handleOnChange}
              variant="outlined"
              label="Email"
              fullWidth
              sx={{ marginTop: 1 }}
            />

            <TextField
              name="password"
              sx={{ marginTop: 1 }}
              type="password"
              onChange={handleOnChange}
              variant="outlined"
              fullWidth
              label="Password"
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
              type="submit"
              style={{ marginTop: "20px" }}
              fullWidth
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
