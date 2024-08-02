import Image from "next/image";
import {
  LandingSection,
  BitmojiContainer,
  IntroductionContainer,
  HeroGreet,
  HeroName,
  HeroDoing,
  HeroSummary,
  HeroActions,
  HeroContainer,
  HeroCitation,
} from "./Landing.styles";
import akimHi from "@/public/assets/bitmojis/bitmoji-hi.png";
import Link from "next/link";
import React from "react";

function Landing(props, ref) {
  return (
    <LandingSection props={props} ref={ref}>
      <IntroductionContainer>
        <BitmojiContainer className="bitmoji">
          <Image
            title="Akim says hi"
            src={akimHi}
            alt="Akim says hi"
            priority={true}
            layout="responsive"
            width={131}
            height={312}
          />
        </BitmojiContainer>
        <HeroContainer>
          <HeroGreet>Hi there, my name is</HeroGreet>
          <HeroName>John Ruff</HeroName>
          <HeroDoing>Let&apos;s build things together.</HeroDoing>
          <HeroSummary>
            Young engineer based in Luxembourg specializing in blockchain,
            software development and project management. <br />
            I&apos;m currently working as a Consulting Engineer at Alcyone
          </HeroSummary>
          <HeroActions>
            <Link href="/CV_Akim_BENCHIHA_EN.pdf">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get my Resume"
              >
                Get my Resume
              </a>
            </Link>
            <Link href="mailto:info@alcyone-consulting.lu" passHref={true}>
              <a rel="noopener noreferrer" aria-label="Contact Alcyone">
                Contact Alcyone
              </a>
            </Link>
          </HeroActions>
        </HeroContainer>
      </IntroductionContainer>
      <HeroCitation>
        <blockquote>
          <p>
            If debugging is the process of removing software bugs, then
            programming must be the process of putting them in.
          </p>
          <footer>Edsger W. Dijkstra</footer>
        </blockquote>
      </HeroCitation>
    </LandingSection>
  );
}

export default React.forwardRef(Landing);
