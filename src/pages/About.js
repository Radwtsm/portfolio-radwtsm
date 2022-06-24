import StyledIconsColor from "../styles/IconsColor";
import EmailIcon from "@mui/icons-material/Email";
import TextSection from "../components/TextSection/TextSection";
import StyledMargin from "../components/Margin/Margin.styled";

import Header from "../components/Header/Header";

import React from "react";

const About = () => {
  return (
    <>
      <Header title="INFO" />
      <StyledMargin>
        <TextSection title="If you need to get in touch with me" />
        <StyledIconsColor>
          <h1>Add contact here</h1>
        </StyledIconsColor>
      </StyledMargin>
    </>
  );
};

export default About;
