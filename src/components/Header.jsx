import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function Header() {
  return(
    <AppBar position="static">
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <Typography variant="h4" 
            sx={{ 
              py: 5,
              pr: 10,
              display: { xs: 'none', md: 'flex'} 
            }}
            >
              Reyanna Garibay
          </Typography>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};