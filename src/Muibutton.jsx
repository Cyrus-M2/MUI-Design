import { Button, Stack } from '@mui/material'; 

const Muibutton = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outline</Button>
      <Button variant="text">Text</Button>

    {/* The href prop to convert a button to a link﻿ */}
      <Button variant="text" href="https://www.google.com">
      Visit Google
    </Button>
    
    </Stack>
    
  )
}

export default Muibutton