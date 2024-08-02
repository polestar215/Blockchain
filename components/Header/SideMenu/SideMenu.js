import Link from "next/link";
import SocialMedia from "./NavSocialMedia/NavSocialMedia";
import HoCNavLink from "@/components/HoC/HoCNavLink";
import React from "react";
import {
  NavSideMenu,
  Aside,
  AsideNavContainer,
  AsideNavList,
  AsideNavListItem,
} from "./SideMenu.styles";

function HoCNavLinkSmallDevice({ navLinksData, setShowSide }) {
  return HoCNavLink(
    AsideNavList,
    AsideNavListItem,
    Link,
    navLinksData,
    "AsideNav",
    setShowSide,
  );
}

function SideMenu({ sideMenuOpen, setShowSide, navLinksData }) {
  return (
    <NavSideMenu sideMenuOpen={sideMenuOpen} aria-hidden={!sideMenuOpen}>
      <Aside>
        <AsideNavContainer sideMenuOpen={sideMenuOpen}>
          <HoCNavLinkSmallDevice
            setShowSide={setShowSide}
            navLinksData={navLinksData}
          />
        </AsideNavContainer>
        <SocialMedia />
      </Aside>
    </NavSideMenu>
  );
}

export default React.memo(SideMenu);
