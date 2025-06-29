import { Button, Stack } from '@mui/material'; 

const Muibutton = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outline</Button>
      <Button variant="text">Text</Button>
    </Stack>
  )
}

export default Muibutton