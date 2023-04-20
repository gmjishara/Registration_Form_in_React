import React from 'react'
import Box from '@mui/material/Box';
import InputTag from './InputTag';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function MainDiv() {
  return (
    <div>
         <Box
      sx={{
        width: 400,
        height: 500,
        margin:'auto',
        borderRadius:2,
        color:'white',
        paddingTop:2,
        typography:'h6',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: '#242259',
        border: 2 ,
        
        boxShadow: 5
        
      }}
      >
        Registration Form
        <Box
      sx={{
        width: 397,
        height: 436,
        borderRadius:2,
        mt:2,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:4,
        backgroundColor: '#ede7f6',
        paddingTop:4
      }}
      >
        <InputTag place='Full Name'/>
        <InputTag place='Email'/>
        <InputTag place='Address'/>
        <InputTag place='Salary'/>
        <FormControlLabel  className='lbl' control={<Checkbox defaultChecked  size="small"/>} label={<h6>Yes I agree to the terms and service</h6>} />
        <Button className='btn' variant="contained" >Submit</Button>
      </Box>
        </Box>
    </div>
  )
}
