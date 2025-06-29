import MuiButton from "./Muibutton"

import { Button, Typography } from "@mui/material"
import './App.css'

function App() {

  return (
    // Heading 
    <div>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>

    {/* subtitles */}
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

    {/* Body Text */}
    <div>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
        dolore sint placeat hic repellendus odit corporis aut quis ut.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet
        sunt maiores eius expedita pariatur magnam minus alias velit nulla?
      </Typography>
    </div>

    {/* changing underlying sematic Element */}
    <div>
      <Typography variant="h4" component="h1">Hello, World</Typography>
    </div>

    {/* Putting Some Margin to the bottom of our text */}
    <div>
     <Typography variant="h4" component="h1" gutterBottom>
        Hello, World
      </Typography>
      <Typography variant="body1">The world is an awesome place to be.</Typography>
    </div>
       <MuiButton />

    </div>
    
  )
}

export default App
