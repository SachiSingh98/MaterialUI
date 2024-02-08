import React, { useState } from 'react'
import {Button, Menu , MenuItem} from '@mui/material'

export default function MenuItems() {
    const [anchorElm , setAnchorElm] = useState(null)
    const [open , setOpen] = useState(false)

    const handleOnClose = ()=>{
        setAnchorElm(null)
        setOpen(false)
    }
    const handleOnOpen  = (e)=>{
        // setAnchorElm(e.currentTarget)
        setOpen(true)
    }

  return (
    <>
    <Button onClick={handleOnOpen} variant='contained' sx={{borderRadius:"0px"}} > Open Menu</Button>
    <Menu anchorEl={anchorElm} open={open} onClose={handleOnClose}>
        <MenuItem onClick={handleOnClose} >Profile</MenuItem>
        <MenuItem onClick={handleOnClose} >Account</MenuItem>
        <MenuItem onClick={handleOnClose} >Logout</MenuItem>
    </Menu> 

    </>
  )
}
