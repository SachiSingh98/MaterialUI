import { Box, Card, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetail() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getTodo = async () => {
      const data = await fetch(`https://dummyjson.com/todos/${id}`);
      const res = await data.json();
      console.log(res);
      setData(res);
    };
    getTodo();
  }, [id]);
  return (
    <>
      {data ? (
        <Box sx={{padding:"10px" }} >
            <Card sx={{padding:"10px 20px"}} ><Typography variant="h4" sx={{fontWeight:700}} >{data.todo}</Typography></Card>
        </Box>
      ) : (
        <Box sx={{ marginTop:"100px"}} >
          <CircularProgress />
        </Box>
      )}
    </>
  );
}
