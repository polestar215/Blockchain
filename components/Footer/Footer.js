import {
  FooterContainer,
  FooterLink,
  FooterSocialContainer,
} from "./Footer.styles";
import socialLinksData from "@/config/socialMediaLinksData";
import { getSocialIcon } from "@/components/Utilities/SocialMedia";
import Button from "@/components/Utilities/Button";

function Footer() {
  return (
    <FooterContainer>
      <FooterSocialContainer>
        {socialLinksData &&
          socialLinksData.map(({ id, url, name }) => (
            <Button
              key={id}
              style={{ transitionDelay: `${100}ms` }}
              as="a"
              ariaLabel={name}
              href={url}
              className={`${name}Button`}
              backgroundColor="#151b27"
              size="xs"
              shape="rounded"
            >
              {getSocialIcon(name)}
            </Button>
          ))}
      </FooterSocialContainer>
      <FooterLink
        aria-label="Lien github du Portfolio"
        href="https://github.com/Mousticke/portfolio-new"
        target="_blank"
        rel="noreferrer noopener"
      >
        <p>Designed and built by Akim Benchiha</p>
        <p>NextJS ~ Styled Components</p>
      </FooterLink>
    </FooterContainer>
  );
}

export default Footer;
