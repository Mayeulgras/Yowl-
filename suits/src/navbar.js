import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Mon Application
        </Typography>
        <Button color="inherit" href="#home">
          Home
        </Button>
        <Button color="inherit" href="#recherche">
          Recherche
        </Button>
        <Button color="inherit" href="#profil">
          Profil
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;