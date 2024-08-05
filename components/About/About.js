import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AboutArticle,
  AboutContainer,
  AboutHighlight,
  AboutHashtag,
  AboutTechnologies,
  AboutListItem,
  AboutListContainer,
} from "./About.styles";
import JohnHero from "@/public/flower.jpg";
function About(props, ref) {
  return (
    <AboutContainer id={props.id} ref={ref}>
      <h2 className="title-count">About Me</h2>
      <AboutArticle>
        <div className="about-summary">
          <p>
            Hi there! My name isJhon Ruff and I am always ready to start a
            new project and start building amazing things on the internet. Since
            2017, there is one major technology that I want to work more than
            others. (Spoiler : Blockchain)
          </p>
          <span>So, where I come from ? </span>
          <p>
            I am a Senior software/hardware engineer graduated in 2019 (Master
            of Engineering in Computing Science and Industrial engineering) from{" "}
            <Link href="https://centralelille.fr/" passHref>
              <AboutHighlight
                aria-label="Centrale Lille"
                target="_blank"
                rel="noreferrer noopener"
              >
                Centrale Lille
              </AboutHighlight>
            </Link>
            . I am currently based in{" "}
            <Link href="https://en.wikipedia.org/wiki/Luxembourg" passHref>
              <AboutHighlight
                aria-label="Luxembourg"
                target="_blank"
                rel="noreferrer noopener"
              >
                Luxembourg
              </AboutHighlight>
            </Link>{" "}
            and I work as a{" "}
            <Link
              href="https://www.jobhero.com/job-description/examples/engineering/consultant"
              passHref
            >
              <AboutHighlight
                aria-label="Alcyone"
                target="_blank"
                rel="noreferrer noopener"
              >
                Consulting Engineer
              </AboutHighlight>
            </Link>{" "}
            at{" "}
            <Link href="https://alcyone-consulting.lu/" passHref>
              <AboutHighlight
                aria-label="Alcyone"
                target="_blank"
                rel="noreferrer noopener"
              >
                Alcyone
              </AboutHighlight>
            </Link>{" "}
            for the client{" "}
            <Link href="https://www.bcee.lu/en/private-customers/" passHref>
              <AboutHighlight
                aria-label="Spuerkeess"
                target="_blank"
                rel="noreferrer noopener"
              >
                Spuerkeess
              </AboutHighlight>
            </Link>{" "}
            (Bank).
          </p>
          <p>
            I have always loved creating things that rely on new technologies,
            especially in the{" "}
            <Link href="https://github.com/topics/iot" passHref>
              <AboutHashtag
                aria-label="IoT"
                target="_blank"
                rel="noreferrer noopener"
              >
                #IoT
              </AboutHashtag>
            </Link>
            ,{" "}
            <Link href="https://github.com/topics/frontend" passHref>
              <AboutHashtag
                aria-label="Front-End"
                target="_blank"
                rel="noreferrer noopener"
              >
                #Front-End
              </AboutHashtag>
            </Link>{" "}
            and{" "}
            <Link
              href="https://coinmarketcap.com/alexandria/glossary/blockchain"
              passHref
            >
              <AboutHashtag
                aria-label="Blockchain"
                target="_blank"
                rel="noreferrer noopener"
              >
                #Blockchain
              </AboutHashtag>
            </Link>{" "}
            fields. My goal is to improve my skills and best practices. I love
            building web applications interacting with a{" "}
            <Link href="https://docs.soliditylang.org/en/v0.8.11/" passHref>
              <AboutHashtag
                aria-label="Solidity"
                target="_blank"
                rel="noreferrer noopener"
              >
                #Solidity
              </AboutHashtag>
            </Link>{" "}
            smart contract using{" "}
            <Link href="https://github.com/topics/react" passHref>
              <AboutHashtag
                aria-label="React"
                target="_blank"
                rel="noreferrer noopener"
              >
                #React
              </AboutHashtag>
            </Link>
            . I also love programming using low level programming for learning
            purpose like{" "}
            <Link href="https://github.com/topics/cpp" passHref>
              <AboutHashtag
                aria-label="C++"
                target="_blank"
                rel="noreferrer noopener"
              >
                #C++
              </AboutHashtag>
            </Link>
          </p>

          <AboutTechnologies>
            <p>Here some technologies I have already working on :</p>
            <AboutListContainer>
              <AboutListItem>React</AboutListItem>
              <AboutListItem>.NET</AboutListItem>
              <AboutListItem>C/C++</AboutListItem>
              <AboutListItem>IO-Link</AboutListItem>
              <AboutListItem>Solidity/Blockchain</AboutListItem>
              <AboutListItem>Embedded Systems</AboutListItem>
            </AboutListContainer>
          </AboutTechnologies>
        </div>
        <div className="about-hero">
          <Image
            title="John Ruff"
            src={JohnHero}
            loading="lazy"
            layout="responsive"
            alt="John Ruff"
          />
        </div>
      </AboutArticle>
    </AboutContainer>
  );
}

export default React.forwardRef(About);
