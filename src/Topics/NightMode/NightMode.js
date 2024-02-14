import { CssBaseline, Switch, ThemeProvider, Typography, createTheme, Button} from '@mui/material'
import React, { useState } from 'react'
import {darkPalette , lightPalette} from './Library'

export default function NightMode() {
    const [nightmode , setnightmode] = useState(false)

    const theme = createTheme(nightmode ? darkPalette : lightPalette)
  return (
    <>
    <ThemeProvider theme={theme} >
        <CssBaseline  />
        <Switch checked={nightmode} onChange={()=>{setnightmode((pre)=>!pre)}} />

        <Typography>Hello world {nightmode ? 'With darkmode' : "light mode"}</Typography>

        <Button>
            Dark mode
        </Button>
    </ThemeProvider>
      
    </>
  )
}
