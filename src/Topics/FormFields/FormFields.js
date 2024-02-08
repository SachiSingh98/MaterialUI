import React, { useState } from 'react'
import {Button, TextField, Typography} from '@mui/material'

export default function FormFields() {
    const initialState = {
        name:"",
        email:"",
        password:""
    }
    const [value , setValue] = useState(initialState)
    const [data , setdata] = useState("No Data")
    const handleOnChange = (e)=>{
        setValue({...value ,[e.target.name]:e.target.value})
    }



  return (
    <>
        <TextField name='name' type='text' onChange={handleOnChange} variant='filled' placeholder='Name' sx={{margin:3}} /> <br />
        <TextField name='email' type='email' onChange={handleOnChange} variant='outlined' placeholder='Email' sx={{margin:3}} /> <br />
        <TextField name='password' type='password' onChange={handleOnChange} variant='standard' placeholder='Password' sx={{margin:3}} /> <br />


        <Button sx={{margin:"5px"}} onClick={()=>setdata(value)} variant='contained'>
            Get Data
        </Button>

        <Typography margin={3} >
            {data.name} <br/>
            {data.email} <br/>
            {data.password} <br/>
        </Typography>
    </>
  )
}
