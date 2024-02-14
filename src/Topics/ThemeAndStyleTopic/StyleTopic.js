import { AppBar, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'

export default function StyleTopic() {
    const CustomizedTypography = styled(Typography)`
    color:red;

    :hover{
        color:blue;
        background:green
    }
    `

    // Advance component
    const NavBar = styled(AppBar)(({theme})=>({
        background:"red",
        [theme.breakpoints.down("sm")]:{
            background:"green"
        }
    }))
  return (

    // In this we can add custom styling .


    // In this we will learn about the differnce between sx and style prop.
    // Style apply css properties while the sx provides the mui properties.
    <>
      <CustomizedTypography marginTop="100px" >
        Hello this is customize Typography
      </CustomizedTypography>

      <NavBar>
        <Toolbar>

        </Toolbar>
      </NavBar>
    </>
  )
}
