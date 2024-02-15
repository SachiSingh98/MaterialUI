import { Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function DrawerComponent({linkArr}) {
    const [ showMenu , setShowmenu] = useState(false)
  return (
    <>
      <Drawer onClick={()=>{setShowmenu(false)}} open={showMenu} >
          <List>
        {linkArr.map((data, index) => {
          return (
              <ListItemButton divider key={index} >
                <ListItemText>
                    {data}
                </ListItemText>
              </ListItemButton>
          );
        })}
        </List>
      </Drawer>


      <IconButton onClick={()=>{setShowmenu(true)}} sx={{color:"white" , marginLeft:"auto"}} >
        <MenuIcon/>
      </IconButton>
    </>
  );
}
