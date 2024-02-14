import { Typography, styled } from '@mui/material'
import React from 'react'

export default function StyleTopic() {
    const CustomizedTypography = styled(Typography)`
    color:red;

    :hover{
        color:blue;
        background:green
    }
    `
  return (

    // In this we can add custom styling .
    <>
      <CustomizedTypography>
        Hello this is customize Typography
      </CustomizedTypography>
    </>
  )
}
