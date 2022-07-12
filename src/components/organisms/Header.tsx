import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import AddForm from "./AddForm";
import AppLogo from "../atoms/AppLogo";

function Header() {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ py: 2 }}>
        <AppLogo />
        <Box sx={{ width: 500 }}>
          <AddForm />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
