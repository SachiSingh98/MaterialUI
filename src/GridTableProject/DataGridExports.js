import React from 'react'
import {GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter} from "@mui/x-data-grid"
import { Box } from '@mui/material'

export default function DataGridExport() {
  return (
    <Box display="Flex" gap={4} m={1} >
        <GridToolbarExport/>
        <GridToolbarFilterButton/>
        <GridToolbarQuickFilter/>
    </Box>
  )
}
