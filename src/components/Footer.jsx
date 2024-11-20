import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material"

export default function Footer() {
  return(
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }} >
      <Toolbar disableGutters sx={{ justifyContent: "center" }}>
        <IconButton aria-label="github" component="a" href="https://github.com/ReyG18">
          <GitHub />
        </IconButton>
        <IconButton aria-label="linkedIn" component="a" href="https://linkedin.com/in/reyg18">
          <LinkedIn />
        </IconButton>
        <IconButton aria-label="email">
          <Email />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}