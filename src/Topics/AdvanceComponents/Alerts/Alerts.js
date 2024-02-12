import { Alert, Button } from '@mui/material'
import React, { useState } from 'react'

export default function Alerts() {
    const [showAlert , setShowAlert] = useState(false)
  return (
    <>
      {showAlert ? <Alert severity='error' onClose={()=>{setShowAlert(false)}} >This is an alert</Alert> : null}
      <Button onClick={()=>{setShowAlert(true)}} >
        Show Alert
      </Button>
    </>
  )
}
