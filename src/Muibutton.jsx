import { 
Typography, Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton, TextField, InputAdornment,
Radio, FormControlLabel, RadioGroup, Checkbox, Switch, Box, Grid, Paper, Card, CardContent, CardActions, CardMedia,
Accordion, AccordionSummary, AccordionDetails, AppBar, Toolbar, Link, Drawer, Avatar, Tooltip, Alert, AlertTitle,
AvatarGroup, Badge, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Chip,
Snackbar,   Dialog, LinearProgress, CircularProgress, DialogTitle, DialogContent, DialogActions,  createTheme, colors,
  ThemeProvider } from '@mui/material'; 

import { FaUserPlus } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { FaUsersViewfinder } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { BiXCircle } from "react-icons/bi";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.lime[500],
      contrastText: "#fff",
    },
  },
});


const Muibutton = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);


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

    <Stack direction='row' spacing={3}>
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

  {/* Grid */}

<Grid container spacing={3}>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4}}>
        <Box bgcolor="primary.main" p={2}>
          <Typography variant="h4">Box 1</Typography>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4}}>
        <Box bgcolor="primary.main" p={2}>
          <Typography variant="h4">Box 2</Typography>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4}}>
        <Box bgcolor="primary.main" p={2}>
          <Typography variant="h4">Box 3</Typography>
        </Box>
      </Grid>
  </Grid>

  {/* Paper, elevation */}

    <Paper sx={{ p: 5 }} elevation={24} variant="outlined">
      <Typography variant="h5">Hello, world</Typography>
    </Paper>

{/* Card */}

    <Card sx={{ width: "300px" }}>
            <CardMedia component="img" height="200px" image="/img.jpg" />
      <CardContent>
        <Typography variant="h5">Title</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          repellendus velit nisi dolore vitae obcaecati provident atque
          similique repellat delectus.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Like
        </Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>

{/* Accordion */}

  <Accordion>
      <AccordionSummary expandIcon={<FaChevronDown />}>
        <Typography variant="h5">What is React?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
            React is an extremely popular declarative library for building user interfaces
        </Typography>
      </AccordionDetails>
    </Accordion>

{/* Navigation Bar */}
<AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <FaUsersViewfinder />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Awesome App
        </Typography>

        {/* NavLinks */}
        <Stack direction="row" spacing={2}>
          <Button color="inherit" href="https://github.com">
            Home
          </Button>
          <Button color="inherit" href="https://github.com">
            Features
          </Button>
          <Button color="inherit" href="https://github.com">
            About
          </Button>
          <Button color="inherit" href="https://github.com">
            Login
          </Button>
          <Button color="inherit" href="https://github.com">
            Sign Up
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>

  {/* Link﻿ */}

  <Stack direction="row" spacing={2}>
      <Link
        href="https://github.com"
        color="primary"
        underline="hover"
        variant="body1"
      >
        Open Github
      </Link>
      <Link
        href="https://github.com"
        color="secondary"
        underline="hover"
        variant="body1"
      >
        Open Github
      </Link>
    </Stack>

{/* Drawer */}

      <IconButton onClick={(_e) => setDrawerOpen(true)}>
        <IoMdMenu />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={(_e) => setDrawerOpen(false)}
      >
        <Box width="300px" p={3}>
          <Typography variant="h6">Side Panel</Typography>
        </Box>
      </Drawer>

{/* Avatar﻿ */}

    <Stack direction="row" spacing={2}>
    <AvatarGroup>
      <Avatar sx={{ backgroundColor: "primary.main" }}>DO</Avatar>
      <Avatar sx={{ backgroundColor: "primary.main" }}>JD</Avatar>

      <Avatar
        src="https://www.randomuser.me/api/portraits/women/80.jpg"
        alt="jane doe"
      />
      <Avatar
        src="https://www.randomuser.me/api/portraits/men/81.jpg"
        alt="john doe"
      />

      </AvatarGroup>
    </Stack>
    
  {/* Badge */}

    <Stack direction="row" spacing={2}>
      <Badge badgeContent={5} color="primary">
        <IoMail />
      </Badge>
    </Stack>

{/* Lists﻿  */}

<List>
      <ListItem>
        <ListItemIcon>
          <IoMail />
        </ListItemIcon>
        <ListItemText primary="Item 1" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <IoMail />
        </ListItemIcon>
        <ListItemText primary="Item 2" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <IoMail />
        </ListItemIcon>
        <ListItemText primary="Item 3" />
      </ListItem>
    </List>

{/* Adding an Avatar to list */}

<List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <IoMail />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Item 1" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <IoMail />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Item 2" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <IoMail />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Item 3" />
      </ListItem>
  </List>

{/* Chip - usage */}

    <Stack direction="row" spacing={2}>
      <Chip label="Backend" color="secondary" size="medium" />
      <Chip label="Databases" color="secondary" size="medium" />
      <Chip label="Deployment" color="secondary" size="medium" />
      <Chip label="Web security" color="secondary" size="medium" />
      <Chip
        label="Frontend"
        color="secondary"
        size="medium"
        variant="outlined"
      />
      <Chip
        label="Mails"
        color="secondary"
        size="medium"
        variant="outlined"
        icon={<IoMail />}
      />
      <Chip
        label="Frontend"
        color="secondary"
        size="medium"
        variant="outlined"
        avatar={<Avatar>F</Avatar>}
      />

    </Stack>

{/* Tooltip﻿ */}


    <Stack direction="row" spacing={2}>
      <Tooltip title="Delete all posts. This action is irreversible">
        <Button variant="contained">Delete</Button>
      </Tooltip>
    </Stack>
    <Stack direction="row" spacing={2}>
      <Tooltip
        title="Delete all posts. This action is irreversible"
        placement="left"
        arrow
        enterDelay={500}
        leaveDelay={1000}
      >
        <Button variant="contained">Delete</Button>
      </Tooltip>
    </Stack>

{/* Alert﻿ */}

    <Stack direction="column" spacing={2}>
      <Alert severity="success">This is a success alert</Alert>
      <Alert severity="warning">This is a warning alert</Alert>
      <Alert severity="error">This is a error alert</Alert>
      <Alert severity="info">This is a info alert</Alert>
    </Stack>
    <Stack direction="column" spacing={2}>
      <Alert severity="error" variant="filled">
        <AlertTitle>Error fetching data</AlertTitle>
        This could mean you are not logged in or you have no
        internet connection. Please try to fix this issues then
        try again.
      </Alert>
    </Stack>
    <Stack direction="column" spacing={2}>
      <Alert severity="error" variant="filled" icon={<BiXCircle />}>
        <AlertTitle>Error fetching data</AlertTitle>
        This could mean you are not logged in or you have no internet
        connection. Please try to fix this issues then try again.
      </Alert>
    </Stack>
    <Stack direction="column" spacing={2}>
      <Alert
        severity="success"
        variant="filled"
        icon={<BiXCircle />}
        action={<Button variant="contained" color="success">Undo</Button>} >
        <AlertTitle>Success</AlertTitle>
        Account ha been deleted successfully
      </Alert>
    </Stack>

{/* Snackbar﻿ */}

    <Stack direction="column" spacing={2}>
      <Snackbar
        open={true}
        message="Article created successfully"
        autoHideDuration={2000}
      />
    </Stack>

{/* Dialog */}

<>
      <Button onClick={() => setOpen(true)} variant="outlined" color="error">
        Delete Repository
      </Button>
      <Dialog open={open}>
        <DialogTitle>
          Are you sure you want to delete this repository?
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            This action is irreversible. You will lose all the stars, forks and
            all the project history. This action cannot be undone and we might
            not be able to help you.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              console.log("confirmed");
              setOpen(false);
            }}
          >
            Yes, I want to delete this repository
          </Button>
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>

{/* Basic Usage for Both LinearProgress and CircularProgress﻿     */}

    <Stack spacing={2}>
      <LinearProgress />
      <CircularProgress />
    </Stack>
    <Stack spacing={2}>
      <LinearProgress variant="determinate" value={70} />
      <CircularProgress variant="determinate" value={60} />
    </Stack>
    <Stack spacing={2}>
      <LinearProgress
        sx={{
          height: 10,
          borderRadius: 5,
          bgcolor: "#eee",
          color: "primary.main",
        }}
      />
      <CircularProgress size={150} thickness={10} />
    </Stack>

{/* Responsiveness */}

<Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Paper sx={{ p: 8, bgcolor: "primary.main" }}>Item 1</Paper>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Paper sx={{ p: 8, bgcolor: "primary.main" }}>Item 2</Paper>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Paper sx={{ p: 8, bgcolor: "primary.main" }}>Item 3</Paper>
      </Grid>
</Grid>

{/* Customizing The Theme */}

    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="h3">hello mui</Typography>
        <Button variant="contained">Click Me</Button>
      </Box>
    </ThemeProvider>

    </Stack>
    
  )
}

export default Muibutton