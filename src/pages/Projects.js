import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import StyledMargin from "../components/Margin/Margin.styled";

import React from "react";

const Projects = () => {
  return (
    <>
      <Header title="Projects" />
      <StyledMargin>
        <Card
          title="Giochigiò"
          img="https://i.ibb.co/V20kWss/giochigi.png"
          info="sito fatto interamente da me"
        />
      </StyledMargin>
    </>
  );
};

export default Projects;
