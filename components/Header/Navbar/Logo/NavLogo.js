import Link from "next/link";
import { NavLogoContainer } from "./NavLogo.styles";

function NavLogo() {
  return (
    <NavLogoContainer>
      <Link href="#">
        <a aria-label="home" rel="noreferrer noopener">
          <span className="text-secondary">{"<"}</span>
          <span className="text-hero"></span>
          <span className="text-secondary">{" />"}</span>
        </a>
      </Link>
    </NavLogoContainer>
  );
}

export default NavLogo;
