import { Typography, Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton, TextField, InputAdornment,
  Radio, FormControlLabel, RadioGroup, Checkbox, Switch, Box } from '@mui/material'; 
import { FaUserPlus } from "react-icons/fa6";

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

    {/* Placing Icon In Button﻿ */}
    <Stack direction="row" display="block" spacing={4}>
            <Button variant="contained" size="large" startIcon={<FaUserPlus />}>
                Add User
            </Button>
            <Button variant="contained" size="large" endIcon={<FaUserPlus />}>
                Add User
            </Button>
    </Stack>

    {/* IconButton﻿ */}
    <Stack direction="row" display="block" spacing={4}>
      <IconButton color="success" size="large">
        <FaUserPlus />
      </IconButton>
    </Stack>

    {/* GroupButton */}
        <Stack direction="row" display="block" spacing={4}>
            <ButtonGroup orientation='vertical'>
              <Button>Left</Button>
              <Button>Center</Button>
              <Button>Right</Button>
            </ButtonGroup>
        </Stack>

    {/* Toggle Button﻿ */}
    <ToggleButtonGroup value={["bold", "underline"]}>
      <ToggleButton value="bold">Bold</ToggleButton>
      <ToggleButton value="italic">Italic</ToggleButton>
      <ToggleButton value="underline">Underline</ToggleButton>
    </ToggleButtonGroup>

    {/* Text Field */}
    <Stack>
      <TextField label="first name" type="text" />
    </Stack>

    {/* Changing the variant﻿ */}
    <Stack>
      <TextField label="first name" type="text" variant="standard" />
      <TextField label="middle name" type="text" variant="outlined" />
      <TextField label="last name" type="text" variant="filled" />
    </Stack>

    {/* Input Adornments﻿ */}
    <Stack direction="row" spacing={2}>
      <TextField
        label="Your Weight"
        type="number"
        variant="outlined"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">Kg</InputAdornment>
            ),
          },
        }}
      />
    </Stack>

    {/* Radio Button﻿ */}
    <Stack direction="row" spacing={2}>
      <RadioGroup value='female'>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
    </Stack>

    {/* Checkbox﻿ */}
    <Stack direction="row" spacing={2}>
      <FormControlLabel
        label="I agree to terms and conditions"
        control={<Checkbox />}
      />
    </Stack>

    {/* Switch */}
    <Stack direction="row" spacing={2}>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch />}
      />
    </Stack>

    {/* Box﻿ */}
    <Box>
      <Typography variant="h4">Hello, World</Typography>
    </Box>

{/* Changing the underlying HTML element via component prop */}
    <Box component="section">
      <Typography variant="h4">Hello, World</Typography>
    </Box>
{/* The sx prop﻿ */}
    <Box
      component="section"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        height: "100px",
        width: "100px",
        "&:hover": {
          backgroundColor: "primary.light",
        },
      }}
    >
      <Typography variant="h4">Hello, World</Typography>
    </Box>

    {/* Stack */}
    <Stack>
      <Box width="100px" height="100px" bgcolor="primary.main">
        <Typography variant="h4">Hello, World</Typography>
      </Box>
      <Box width="100px" height="100px" bgcolor="primary.main">
        <Typography variant="h4">Hello, World</Typography>
      </Box>
      <Box width="100px" height="100px" bgcolor="primary.main">
        <Typography variant="h4">Hello, World</Typography>
      </Box>
    </Stack>

    </Stack>
    
  )
}

export default Muibutton