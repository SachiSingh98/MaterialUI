import { Box , Button, CircularProgress, LinearProgress } from '@mui/material'
import React, { useState } from 'react'

export default function ProgressBars() {
    const [ value , setValue] = useState(10)
  return (
    <>
    <Box sx={{m:2}} >
      <CircularProgress variant='determinate' value={value} />
      <Button onClick={()=>{setValue(value-10)}} >Decrease</Button>
      <Button onClick={()=>{setValue(value+10)}} >Increase</Button>
      <LinearProgress  />
    </Box>
    </>
  )
}
