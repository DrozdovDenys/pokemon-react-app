import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
  } from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static" id="back-to-top-anchor">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            My Pokédex
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Header;