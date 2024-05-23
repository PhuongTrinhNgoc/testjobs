import React from 'react'
import './css.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Dropdow({lablename,isOpen,setIsOpen}) {
  return (
    <div className='main-dropdow'> 

    <div className='dropdow-child'> 
    <div className='dou-btn'>
    <Button onClick={()=> setIsOpen(false)} variant="contained">X</Button>

    </div>
    <div style={{ display:'flex',flexDirection:'column', gap:'10px',justifyContent:'space-between' }}>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
   <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
<Button variant="contained">Add</Button>
  


   </div>

    </div>
  )
}

export default Dropdow