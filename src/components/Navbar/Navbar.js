import React from "react";
import StyledNavbar from "./Navbar.styled";

import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink to="/">
        <HomeIcon />
      </NavLink>

      <NavLink to="/projects">
        <WorkIcon />
      </NavLink>

      <NavLink to="/about">
        <InfoIcon />
      </NavLink>
    </StyledNavbar>
  );
};

export default Navbar;
