import { Button, List , Drawer, ListItemButton } from '@mui/material'
import React, { useState } from 'react'

export default function DrawersTopic() {
    const [open , setOpen] = useState(false)
  return (
    <>
     <Button onClick={()=>{setOpen(true)}} variant='outlined'>
        Open Drawer
    </Button> 

    <Drawer anchor='right' onClick={()=>{setOpen(false)}} open={open} >
        <List sx={{padding:"10px 30px"}}>
            <ListItemButton  onClick={()=>{setOpen(false)}} >Profile</ListItemButton>
            <ListItemButton  onClick={()=>{setOpen(false)}} >Account</ListItemButton>
            <ListItemButton  onClick={()=>{setOpen(false)}} >Dashboard</ListItemButton>
        </List>
    </Drawer>
    </>
  )
}
