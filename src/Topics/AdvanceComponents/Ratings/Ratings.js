import { Box, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Ratings() {
    const [ratingValue , setRatingValue] = useState()
  return (
    <>
     <Box sx={{m:2}} >
        <Rating size='large' precision={0.5} value={ratingValue} onChange={(e , val)=>{setRatingValue(val)}} />
        <Typography>Ratings : {ratingValue !== undefined ? ratingValue : 0}</Typography>
    </Box> 
    </>
  )
}
