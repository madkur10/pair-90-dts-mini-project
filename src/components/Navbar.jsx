import React from "react";
import { Box, Link } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          margin: 3,

          backgroundColor: "#141414",
        }}
      >
        <LinkRouter to="/">
          <Link href="#" underline="hover" color="#FFFFFF">
            Home
          </Link>
        </LinkRouter>
        <LinkRouter to="/detail">
          <Link href="#" underline="hover" color="#FFFFFF">
            Movie Detail
          </Link>
        </LinkRouter>
        <Link href="#" underline="hover" color="#FFFFFF">
          Register
        </Link>
        <Link href="#" underline="hover" color="#FFFFFF">
          Login
        </Link>
      </Box>
      ;
    </>
  );
};

export default Navbar;
