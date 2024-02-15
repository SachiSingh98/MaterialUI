import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Drawers({ linksArr }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer
        open={open}
        onClick={() => {
          setOpen(false);
        }}
      >
        <List>
          {linksArr &&
            linksArr.map((data, index) => {
              return (
                <ListItemButton key={index} divider>
                  <ListItemIcon>
                    <ListItemText>{data}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              );
            })}
        </List>
      </Drawer>
      <IconButton sx={{marginLeft:"auto" , color:"white"}} >
        <MenuIcon
          onClick={() => {
            setOpen(true);
          }}
        />
      </IconButton>
    </>
  );
}
