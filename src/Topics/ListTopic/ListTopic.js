import React, { useState } from "react";
import {
  List,
  Box,
  ListItemButton,
  ListItemText,
  ListItem,
  Collapse,
} from "@mui/material";

export default function ListTopic() {

    const array = ["First" , "Second" , "Third" , "Fourth" , "Fifth"]
    const [openList , setOpenList] = useState(false)
  return (
    <>
      <Box sx={{ width: 300 }}>

        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemText onClick={()=>{setOpenList(true)}} primary="Open List" >
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </List>




        <Collapse in={openList}>
        <List onClick={()=>{setOpenList(false)}}>
        {array.map((item , index)=>{
            return <ListItemButton key={index} sx={{backgroundColor:"whitesmoke"}}>
            <ListItem divider>
              <ListItemText onClick={()=>{setOpenList(false)}} primary={item} />
            </ListItem>
          </ListItemButton>
        })}
        </List>
        </Collapse>
      </Box>
    </>
  );
}
