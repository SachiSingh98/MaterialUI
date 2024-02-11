import {  Button, Container , TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormValidation() {
    const { handleSubmit , register , formState:{errors} } = useForm()
    console.log(errors)

  return (
    <>
      <Container sx={{ marginTop: "100px" , width:"50%" , textAlign:"center" }}>

        <form onSubmit={handleSubmit((data)=>{
            console.log(data)
        })} > 

        <TextField error={Boolean(errors.email)} helperText={Boolean(errors.email) ? <Typography>Invalid Email</Typography> : null} label="Email" variant="outlined" name="email"  fullWidth {...register("email" , {
            validate:(val)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
        })} /> 

        <TextField  error={Boolean(errors.password)} helperText={Boolean(errors.password) ? <Typography>Password must be greater then 6</Typography> : null} sx={{mt:2}} label="Password" variant="outlined" name="password" type="password" fullWidth {...register("password" ,{minLength:6})} /> 


        <Button disabled={Boolean(errors.email || errors.password)} sx={{mt:2}} type="submit" fullWidth variant="contained" >
            Submit
        </Button>

        </form>
      </Container>
    </>
  );
}
