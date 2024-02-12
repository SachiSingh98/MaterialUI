import React , {useContext} from "react";
import { Box, Typography  , Button} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { InfoContext } from "../Context/InfoContext";
import './ContactInfo.css'

export default function ContactInfo() {
  const { data, setdata } = useContext(InfoContext);

  const handleOnDelete = (i) => {
    console.log(i)
    const filterData = data.filter((data, index) => {
      return data.id !== i;
    });
    setdata(filterData);
  };


  const coloumns = [
    { field: "id", headerName: "ID", width: 40 , headerClassName:"headerNames" },

    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
      headerClassName:"headerNames"
    },

    {
      field: "email",
      headerName: "Email",
      width: 300,
      editable: true,
      headerClassName:"headerNames"
    },

    {
      field: "password",
      headerName: "Password",
      width: 200,
      editable: true,
      headerClassName:"headerNames"
    },

    {
      field: "age",
      headerName: "Age",
      width: 100,
      editable: true,
      headerClassName:"headerNames"
    },

    {
      field: "genders",
      headerName: "Gender",
      width: 150,
      editable: true,
      headerClassName:"headerNames"
    },

    {
      field: "terms",
      headerName: "Agree To Terms",
      width: 150,
      editable: true,
      headerClassName:"headerNames"
    },
    {
      field: "delete",
      headerName: "Delete",
      headerClassName:"headerNames",
      width: 100,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => handleOnDelete(params.row.id)}
        >
          Delete
        </Button>
      ),
    },

  ];


  return (
    <>
    {data && data.length > 0 ? <Box  sx={{ height: "100%", width: '100%' , marginTop:"70px" }}>
      <DataGrid
        rows={data}
        columns={coloumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />

    </Box>: <Box sx={{marginTop:"200px" , textAlign:"center" }} >
      <Typography variant="h3" sx={{fontWeight:700 , fontFamily:"sans-serif"}} >
        No Data Available
      </Typography>
      </Box>}
    </>
  );
}
