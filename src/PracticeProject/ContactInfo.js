import React, { useContext } from 'react'
import { Container , Card , Box , Typography , Button } from '@mui/material'
import { InfoContext } from '../Context/InfoContext'


export default function ContactInfo() {

    const {data, setdata} = useContext(InfoContext)

    const handleOnDelete = (i)=>{
        const filterData = data.filter((data,index)=>{
            return index !== i
        })
        setdata(filterData)
      }

  return (
    <>
             <Container sx={{ marginTop: "100px" }}>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <Box key={index}>
                <Card sx={{padding:"10px" , margin:"10px 0px"}} >
                    <Typography>
                        Name : {item.name}
                    </Typography>

                    <Typography>
                        Email : {item.email}
                    </Typography>

                    <Typography>
                        Password : {item.password}
                    </Typography>

                    <Typography>
                        Age : {item.age}
                    </Typography>

                    <Typography>
                        Gender : {item.genders}
                    </Typography>

                    <Button onClick={()=>{handleOnDelete(index)}} sx={{marginTop:"5px"}} variant="contained">
                        Delete
                    </Button>
                </Card>
              </Box>
            ))
          ) : (
            <Typography>No Data</Typography>
          )}

        </Container> 
    </>
  )
}
