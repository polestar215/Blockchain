import {
  NavBurgerContainer,
  NavBurgerInner,
  NavBurgerLines,
} from "./Burger.styles";

import React from "react";

function Burger({ toggle, sideMenuOpen }) {
  return (
    <NavBurgerContainer onClick={toggle}>
      <NavBurgerInner sideMenuOpen={sideMenuOpen}>
        <NavBurgerLines sideMenuOpen={sideMenuOpen} />
      </NavBurgerInner>
    </NavBurgerContainer>
  );
}

export default React.memo(Burger);
