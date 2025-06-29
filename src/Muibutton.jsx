import { Button, Stack } from '@mui/material'; 

const Muibutton = () => {
  return (
    <Stack direction="column" spacing={4} >
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outline</Button>
      <Button variant="text">Text</Button>

    {/* The href prop to convert a button to a link﻿ */}
      <Button variant="text" href="https://www.google.com">
      Visit Google
    </Button>

    {/* Button Colors﻿ */}
    <Stack direction="column" spacing={4}>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" color="error">Error</Button>
      <Button variant="contained" color="info">Info</Button>
      <Button variant="contained" color="warning">Warning</Button>
      <Button variant="contained" color="success">Success</Button>
    </Stack>

    {/* Button size﻿ */}
    <Stack direction="column" display="block" spacing={4}>
      <Button variant="contained" size="small">Small</Button>
      <Button variant="contained" size="medium">Medium</Button>
      <Button variant="contained" size="large">Large</Button>
    </Stack>
    </Stack>
    
  )
}

export default Muibutton