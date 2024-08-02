import Layout from "../Layout/Layout";
import {
  Header,
  CustomRight,
  SocialMedia,
  Landing,
  About,
  Contact,
  Experience,
  Project,
  SEO,
  Something,
} from "@/components";
import { useRef, useEffect, useCallback, useState } from "react";
import scrollConfig from "@/config/scrollConfig";
import { throttle } from "@/utils";

//TODO - Resume like experiences
//TODO - e2e Cypress
//TODO - Review / last Refactor
//TODO - Git push master + workflow

export default function Home() {
  const [activeLink, setActiveLink] = useState("home");
  const refLandingContainer = useRef(null);
  const revealAboutContainer = useRef(null);
  const revealExperienceContainer = useRef(null);
  const revealProjectContainer = useRef(null);
  const revealContactContainer = useRef(null);

  const handleActiveLink = useCallback(() => {
    if (
      window.scrollY >= refLandingContainer.current.offsetTop &&
      window.scrollY <=
        refLandingContainer.current.clientHeight +
          refLandingContainer.current.offsetTop
    ) {
      setActiveLink("home");
    }
    if (
      window.scrollY >= revealAboutContainer.current.offsetTop &&
      window.scrollY <=
        revealAboutContainer.current.clientHeight +
          revealAboutContainer.current.offsetTop
    ) {
      setActiveLink("about");
    }
    if (
      window.scrollY >= revealExperienceContainer.current.offsetTop &&
      window.scrollY <=
        revealExperienceContainer.current.clientHeight +
          revealExperienceContainer.current.offsetTop
    ) {
      setActiveLink("experience");
    }
    if (
      window.scrollY >= revealProjectContainer.current.offsetTop &&
      window.scrollY <=
        revealProjectContainer.current.clientHeight +
          revealProjectContainer.current.offsetTop
    ) {
      setActiveLink("projects");
    }
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight
    ) {
      setActiveLink("contact");
    }
  }, []);

  const throttledHandleActiveLink = throttle(handleActiveLink);
  useEffect(() => {
    window.addEventListener("scroll", throttledHandleActiveLink);
    return () => {
      window.removeEventListener("scroll", throttledHandleActiveLink);
    };
  }, [throttledHandleActiveLink]);

  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default;
      if (revealAboutContainer.current) {
        sr().reveal(revealAboutContainer.current, scrollConfig());
      }

      if (revealExperienceContainer.current) {
        sr().reveal(revealExperienceContainer.current, scrollConfig());
      }

      if (revealProjectContainer.current) {
        sr().reveal(revealProjectContainer.current, scrollConfig());
      }

      if (revealContactContainer.current) {
        sr().reveal(revealContactContainer.current, scrollConfig());
      }
    }
    animate();
  }, []);

  return (
    <>
      <Header activeLink={activeLink} />
      <Layout>
        <SEO />
        <Landing id="home" ref={refLandingContainer} />
        <About id="about" ref={revealAboutContainer} />
        <Experience id="experience" ref={revealExperienceContainer} />
        <Project id="projects" ref={revealProjectContainer} />
        <Contact id="contact" ref={revealContactContainer} />
      </Layout>
      <SocialMedia />
      <CustomRight />
      <Something />
    </>
  );
}
