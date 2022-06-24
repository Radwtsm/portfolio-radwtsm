import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import StyledMargin from "../components/Margin/Margin.styled";

import React from "react";

const Projects = () => {
  return (
    <>
      <Header title="PROJECTS" subtitle="my favourite ones🔥" />
      <StyledMargin>
        <Card
          title="Giochigiò"
          img="https://www.linkpicture.com/q/giochigio_landing_page.jpg"
          info="E-commerce con più di 1200+ prodotti"
          url="https://giochigio.it/"
        />
        <Card
          title="Tagliacozzo Festival"
          img="https://www.linkpicture.com/q/tagliacozzo_landing_page.jpg"
          info="Sito web realizzato per Festival di livello Internazionale"
          url="https://www.tagliacozzofestival.com/"
        />
        <Card
          title="Jacopo Sipari di Pescasseroli"
          img="https://www.linkpicture.com/q/jacoposipari_landing_page.jpg"
          info="Landing page per prestigioso direttore d'orchestra"
          url="http://www.jacoposiparidipescasseroli.it/"
        />
      </StyledMargin>
    </>
  );
};

export default Projects;
