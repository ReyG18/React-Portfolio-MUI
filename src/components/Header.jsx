import React, { useState } from "react";
import { AppBar, Container, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function HeaderNav() {

  const [activeTab, setActiveTab] = useState(0);
  
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
  return(
    <AppBar position="static">
      <Container maxWidth="x1">
        <Toolbar disableGutters
          sx={{
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="h4" 
            sx={{ 
              display: { xs: 'none', md: 'flex'} 
            }}
            >
              Reyanna Garibay
          </Typography>
          <Tabs
            value={activeTab}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="active tab color change"
          >
            <Tab label="Home" component={Link} to="/" />
            <Tab label="About Me" component={Link} to="/about" />
            <Tab label="Projects" component={Link} to="/projects" />
            <Tab label="Contact Me" component={Link} to="/contact" />
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
};