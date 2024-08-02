import styled from "styled-components";
import { transitionAll } from "@/styles/transitions";
import breakpoints from "@/styles/breakpoints";

export const LandingSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  background: ${(props) => props.theme.colors.landing};
`;

export const BitmojiContainer = styled.div`
  position: relative;
  display: none;
  max-width: 200px;
  min-width: 131px;
  @media ${breakpoints.media_screens.portrait_tablet} {
    display: block;
    margin-inline-end: 20px;
    align-self: center;
  }
`;

export const IntroductionContainer = styled.article`
  display: flex;
  align-items: flex-start;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroGreet = styled.p`
  margin: 0px 0px 1rem 0px;
  font-family: ${(props) => props.theme.fonts.mono};
  color: ${(props) => props.theme.colors.text_secondary};
  font-size: clamp(14px, 15px, 16px);
`;

export const HeroName = styled.h1`
  line-height: 1.1;
  margin: 0px;
  font-size: clamp(30px, 20px + 2vw, 60px);
  font-weight: 600;
`;

export const HeroDoing = styled.h2`
  line-height: 0.9;
  margin-block-start: 10px;
  font-size: clamp(30px, 20px + 2vw, 60px);
  font-weight: 600;
  color: ${(props) => props.theme.colors.text_slate_blue};
`;

export const HeroSummary = styled.p`
  font-weight: 300;
  max-width: 600px;
  line-height: 1.4;
  font-size: 1rem;
  /*@media ${breakpoints.media_screens.portrait_tablet} {
    font-size: 0.9rem;
  }

  @media ${breakpoints.media_screens.small_desktop} {
    font-size: 0.8rem;
  }*/
`;

export const HeroActions = styled.div`
  margin-block-start: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  a {
    color: ${(props) => props.theme.colors.text_secondary};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.text_secondary};
    border-radius: 4px;
    padding: 15px;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${transitionAll};
    margin-inline-end: 1rem;
    margin-block-start: 10px;

    font-size: 1rem;
    /*@media ${breakpoints.media_screens.portrait_tablet} {
      font-size: 0.7rem;
    }*/

    &:hover {
      background-color: ${(props) => props.theme.colors.hover_button};
      outline: none;
    }
  }
`;

export const HeroCitation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  blockquote {
    text-align: center;
    transition: ${transitionAll};
    margin-block-start: 30px;
    font-weight: 300;
  }
  p {
    justify-content: center;
    font-size: 0.8rem;
    margin-block-start: 0;
    font-style: italic;
    &:before {
      content: open-quote;
    }
    &:after {
      content: close-quote;
    }

    /*@media ${breakpoints.media_screens.small_desktop} {
      font-size: 0.7rem;
    }*/
  }
  footer {
    font-size: 0.85rem;
    @media ${breakpoints.media_screens.small_desktop} {
      font-size: 0.75rem;
    }
    color: gray;
    &:before {
      content: "\\2014\\00a0";
    }
  }
`;
