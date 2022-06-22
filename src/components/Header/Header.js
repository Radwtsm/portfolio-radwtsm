import React from "react";

import StyledHeader from "./Header.styled";
const Header = (props) => {
  return (
    <StyledHeader>
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
      <p>{props.additional}</p>
    </StyledHeader>
  );
};

export default Header;
