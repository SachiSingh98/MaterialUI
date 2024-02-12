import React from 'react'
import {Button} from "@mui/material"

export default function Btn() {

    const handleOnBtnClick = (arg)=>{
        alert(arg)
    }

  return (
    <>
    <Button  onClick={()=>{handleOnBtnClick("First Btn")}} sx={{margin:"5px"}} size='large' color='error' variant='contained' >First</Button>

    <Button onClick={()=>{handleOnBtnClick("Second Btn")}} sx={{margin:"5px"}} size='medium' color='secondary' variant='outlined' >Second</Button>

    <Button onClick={()=>{handleOnBtnClick("Third Btn")}} sx={{margin:"5px"}} size='small' variant='text' color='info' >Third</Button>
    </>
  )
}
