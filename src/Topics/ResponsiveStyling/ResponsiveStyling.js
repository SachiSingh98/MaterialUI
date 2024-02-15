import {Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

export default function ResponsiveStyling() {
  const theme = useTheme()
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"))
  const isBetweenSmAndsxs = useMediaQuery(theme.breakpoints.between(200 , 400))

  return (
    <>
        <Typography fontSize={{xs:10 , sm:15 , md:20 , lg:25 , xl:30}} variant='h1'>
            This is a paragraph
        </Typography>


        {/* <Box width={{xl:800 , lg:600 , md:400 , sm:200 , xs:100}} height={{xl:800 , lg:600 , md:400 , sm:200 , xs:100}}  bgcolor="red"> </Box> */}

        <Box>
          <Typography>{isBelowMd ? "Below" : "Above"}</Typography>
          <Typography>{isBetweenSmAndsxs ? "Between" : "Not between"}</Typography>
        </Box>



    </>
  )
}
