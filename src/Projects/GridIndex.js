import { Card, CardHeader, Box, CircularProgress, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import  DataGridExport  from "./DataGridExports";

export default function GridIndex() {
  const [todos, setTodos] = useState();

  //--------------- Defining the coloumns
  const coloumns = [
    {
      field: "id",
      width: 100,
      headerName: "Id",
      renderCell: (params) => {
        return (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/${params.row.id}`}
          >
            {params.row.id}
          </Link>
        );
      },
    },

    { field: "todo", width: 500, headerName: "Todo" },

    {
      field: "completed",
      width: 150,
      headerName: "Completed",
      renderCell: (params) => {
        const taskStatus = params.row.completed;
        return taskStatus ? (
          <AssignmentTurnedInIcon sx={{ color: "green" }} />
        ) : (
          <AssignmentLateIcon sx={{ color: "red" }} />
        );
      },
    },

    { field: "userId", width: 100, headerName: "UserId" },
  ];

  //----------------- Fetching the data
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const getTodo = async () => {
      setloading(true);
      const data = await fetch("https://dummyjson.com/todos");
      const res = await data.json();
      setloading(false);
      setTodos(res.todos);
    };
    getTodo();
  }, []);
  return (
    <>
      {todos && todos.length > 0 ? (
        <Card sx={{ padding: "5px", textAlign: "Center" }}>
          <CardHeader title="Todo list"></CardHeader>
          <DataGrid
          checkboxSelection
          components={{Toolbar:DataGridExport , BaseButton: Button }}
            loading={loading}
            sx={{ height: "500px" }}
            columns={coloumns}
            rows={todos}
            slotProps={{
              baseButton:{
                variant:"outlined"
              }
            }}
            hideFooter
          />
        </Card>
      ) : (
        <Box sx={{ textAlign: "center", marginTop: "100px" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}
