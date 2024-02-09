import React, { useState } from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material'

export default function Dialogs() {
    const [open ,setopen] = useState(false)

    const handleOnOpen = ()=>{
        setopen(true)
    }
  return (
    <>
     <Button onClick={handleOnOpen} sx={{borderRadius:"0px" }} variant='outlined' >
        Open Dialog
    </Button> 

    <Dialog  onClick={()=>{setopen(false)}} open={open} >
        <DialogTitle>This is a Dialog</DialogTitle>
        <DialogContent>
            A dialog is pop which covers the whole screen with a backdrop and shows the important info at the center of the screen
        </DialogContent>

        <DialogActions>
            <Button onClick={()=>{setopen(false)}} >Agree</Button>
            <Button onClick={()=>{setopen(false)}} >Disagree</Button>

        </DialogActions>
    </Dialog>
    </>
  )
}
