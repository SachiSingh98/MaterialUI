import React from 'react'
import {AppBar , Button, Toolbar, Typography} from '@mui/material'

export default function Navbar() {
    // The app bar component is like nav tag in html and the toolbar helps to add the information in a systematic way to it can be in a flex manner
  return (
    <>
      <AppBar>
        <Toolbar>
            <Typography variant='h5' >Logo</Typography>
            <Button variant='contained' sx={{marginLeft:"auto"}} >Login</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}
