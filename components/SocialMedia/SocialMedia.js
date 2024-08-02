import { SocialMediaContainer, SocialMediaList } from "./SocialMedia.styles";
import socialLinksData from "@/config/socialMediaLinksData";
import { getSocialIcon } from "@/components/Utilities/SocialMedia";
import Button from "@/components/Utilities/Button";

function SocialMedia() {
  return (
    <SocialMediaContainer>
      <SocialMediaList>
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
      </SocialMediaList>
    </SocialMediaContainer>
  );
}

export default SocialMedia;
