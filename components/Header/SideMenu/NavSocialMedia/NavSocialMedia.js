import socialLinksData from "@/config/socialMediaLinksData";
import Button from "@/components/Utilities/Button";
import { AsideSocialContainer } from "./NavSocialMedia.styles";
import { getSocialIcon } from "@/components/Utilities/SocialMedia";

function NavSocialMedia() {
  return (
    <AsideSocialContainer>
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
    </AsideSocialContainer>
  );
}

export default NavSocialMedia;
