import React from "react";
import { Container, ContainerFlex } from "./NavigationMenu.styles";

const Menu = () => {
  return (
    <Container>
      <ContainerFlex>
        <p>Typography</p>
        <p>Grid</p>
        <p>Buttons</p>
        <p className="selected">Inputs</p>
      </ContainerFlex>
    </Container>
  );
};

export default Menu;
