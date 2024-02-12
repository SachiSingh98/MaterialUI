import React from "react";
import { Autocomplete, TextField, Box } from "@mui/material";

export default function AutoCompletes() {
    let state = [ "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]
  return (
    <>
      <Box sx={{ m: 2 }}>
        <Autocomplete
          sx={{ width: 300 }}
          options={state}
          renderInput={(params) => (
            <TextField {...params} label="List of movies" />
          )}
        />

        <Autocomplete
          sx={{ width: 300 , mt:2 }}
          options={state}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </Box>
    </>
  );
}
