import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import {theme} from './Theme'

export default function ThemeTopic() {
  return (
    <>
    <ThemeProvider theme={theme} >
        <Typography variant='h1' color="primary" >This is a new Theme</Typography>
    </ThemeProvider>
    </>
  )
}
