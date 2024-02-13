import React from 'react'
import {GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter} from '@mui/x-data-grid'
import {Box} from '@mui/material'

export default function GridExportFeature() {
  return (
    <Box padding="5px" m={2} >
      <GridToolbarExport/>
      <GridToolbarQuickFilter/>
      <GridToolbarFilterButton/>
    </Box>
  )
}
