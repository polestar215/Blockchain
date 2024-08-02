import Link from "next/link";
import Burger from "./Burger/Burger";
import NavLogo from "./Logo/NavLogo";
import { NavContainer, NavLinks, NavList, NavListItem } from "./Navbar.styles";
import HoCNavLink from "@/components/HoC/HoCNavLink";
import React from "react";

function HoCNavLinkDesktop({ navLinksData, activeLink }) {
  return HoCNavLink(
    NavList,
    NavListItem,
    Link,
    navLinksData,
    "DefaultNav",
    null,
    activeLink,
  );
}

function Navbar({ toggleSideMenu, sideMenuOpen, navLinksData, activeLink }) {
  return (
    <NavContainer>
      <NavLogo />
      <NavLinks>
        <HoCNavLinkDesktop
          navLinksData={navLinksData}
          activeLink={activeLink}
        />
      </NavLinks>
      <Burger toggle={toggleSideMenu} sideMenuOpen={sideMenuOpen} />
    </NavContainer>
  );
}

export default React.memo(Navbar);
