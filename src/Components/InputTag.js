import React from 'react'
import TextField from '@mui/material/TextField';
import './All.css'
import Box from '@mui/material/Box';



export default function InputTag(props) {


  return (
    <div>
        <Box>
       <TextField padding='0' fullWidth  size="small"  id="outlined-basic" label={props.place} variant="outlined"  color="primary" focused required />
       </Box>
    </div>
  )
}
