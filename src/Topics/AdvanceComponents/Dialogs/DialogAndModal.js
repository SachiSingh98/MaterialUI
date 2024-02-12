import React, { useState } from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Modal, Typography , Box} from '@mui/material'

export default function DialogAndModal() {
    const [open ,setopen] = useState(false)
    const [modalOpen , setModalOpen] = useState(false)

    const handleOnOpen = ()=>{
        setopen(true)
    }
  return (
    <>
    {/* In this we will learn about the dialog and the modal they both are same in terms of functioning but the thing which make them differ from each other is their usecase we can use dialog when we want to provide permission while blocking the background code like open of an mic and camera which has 2 buttons allow or block like a confirm method in javascript while in the modal is used when the condtion is unskippible like when ever we visit some pages which show either login or pay to use anything this is the key differnce between them */}

    {/* -----------------------------------------------------------------------Dialog----------------------------------------------------------------- */}

     <Button onClick={handleOnOpen} sx={{borderRadius:"0px" }} variant='outlined' >
        Open Dialog
    </Button> 

    <Dialog  onClick={()=>{setopen(false)}} open={open} >
        <DialogTitle>This is a Dialog</DialogTitle>
        <DialogContent>
            A dialog is pop which covers the whole screen with a backdrop and shows the important info at the center of the screen
        </DialogContent>

        <DialogActions>
            <Button onClick={()=>{setopen(false)}} >Agree</Button>
            <Button onClick={()=>{setopen(false)}} >Disagree</Button>

        </DialogActions>
    </Dialog>



    {/* --------------------------------------------------------------------Modals---------------------------------------------------- */}
    
    <Button onClick={()=>{setModalOpen(true)}} sx={{borderRadius:"0px" }} variant='outlined' >
        Open Modal
    </Button> 

    <Modal  onClick={()=>{setModalOpen(false)}} open={modalOpen} >
        <Box position="absolute" left="50%" top="50%" >
            <Typography>This is a Modal</Typography>

            <Button variant='contained' onClick={()=>{setModalOpen(false)}} >Close</Button>
        </Box>
    </Modal>
    </>
  )
}
