import { Alert, Snackbar } from '@mui/material'
import React, { useState } from 'react'

export default function SnackBars() {
    const [open , setOpen] = useState(true)
  return (
    <>
    <Snackbar autoHideDuration={2000} onClose={()=>{setOpen(false)}}  open={open} >
        <Alert severity='success'>
            This is a Alert
        </Alert>
    </Snackbar> 
    </>
  )
}
