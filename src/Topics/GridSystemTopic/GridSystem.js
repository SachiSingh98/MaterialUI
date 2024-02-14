import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function GridSystem() {
    const count = [
        {name:"sam"},
        {name:"sam2"},
        {name:"sam3"},
        {name:"sam4"},
    ]
  return (
    <>

<Grid spacing={0.5} container>
      {count && count.map((data, index) => (
        <Grid xs={12} sm={6} md={4} lg={3} item key={index} padding={1} sx={{ backgroundColor: "whitesmoke" }}>
          <Typography>{data.name}</Typography>
        </Grid>
      ))}
    </Grid>

    </>
  )
}
