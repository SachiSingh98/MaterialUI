import React from 'react'
import {Container} from '@mui/material'

export default function ContainerTopic() {
  return (
    <>
      <Container maxWidth="xs"   sx={{backgroundColor:"whitesmoke" , marginTop:"10px"}} >
        This is extra small
      </Container>

      <Container maxWidth="sm"   sx={{backgroundColor:"whitesmoke" , marginTop:"10px"}} >
        This is small
      </Container>

      <Container maxWidth="md"   sx={{backgroundColor:"whitesmoke" , marginTop:"10px"}} >
        This is medium
      </Container>

      <Container maxWidth="lg"   sx={{backgroundColor:"whitesmoke" , marginTop:"10px"}} >
        large
      </Container>

      <Container maxWidth="xl"   sx={{backgroundColor:"whitesmoke" , marginTop:"10px"}} >
        Extra large
      </Container>
      
    </>
  )
}
