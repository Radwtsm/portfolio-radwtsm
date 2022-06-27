import StyledIconsColor from "../styles/IconsColor";
import EmailIcon from "@mui/icons-material/Email";
import TextSection from "../components/TextSection/TextSection";
import StyledMargin from "../components/Margin/Margin.styled";

import Header from "../components/Header/Header";
import ButtonIcon from "../components/ButtonIcon/ButtonIcon";

import React from "react";

const About = () => {
  return (
    <>
      <Header title="INFO" />
      <StyledMargin>
        <TextSection title="If you need to get in touch with me" />
        <StyledIconsColor>
          <ButtonIcon icon={<EmailIcon/>} text="email"/>
            
        </StyledIconsColor>
      </StyledMargin>
    </>
  );
};

export default About;
