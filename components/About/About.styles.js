import breakpoints from "@/styles/breakpoints";
import { transitionAll } from "@/styles/transitions";
import styled from "styled-components";

export const AboutContainer = styled.section`
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-break: keep-all;
`;

export const AboutArticle = styled.article`
  display: block;
  p {
    margin-block-end: 15px;
  }
  @media ${breakpoints.media_screens.landscape_tablet} {
    display: grid;
    grid-template-columns: 3fr minmax(250px, 2fr);
    gap: 50px;
   
    
  }
  .about-summary {
    display: block;
    & > p{
      font-size: 0.9rem;
    }
  }
  .about-hero{
    display: block;
    margin: 50px auto 0px;
    width: 70%;
    position: relative;
    @media ${breakpoints.media_screens.landscape_tablet} {
        width: 100%;
        margin: 0;
    }

    & > span{
        max-width:350px;
        max-height:350px;
        border-radius: 50%;
        box-shadow: 0px 0px 16px 2px #00e0d8;
        transition: ${transitionAll};
        & > img {
            opacity: 1;
        }
        &:hover {
            cursor pointer;
            box-shadow: 0px 0px 23px 15px #00e0d8; 
            & > img {
                opacity: 0.7;
            }
        }
    }
  }

`;

export const AboutHighlight = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text_secondary};
  transition: ${transitionAll};
  &:hover {
    font-style: italic;
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: "";
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 0.15em;
    background-color: ${(props) => props.theme.colors.text_secondary};
    transition: ${transitionAll};
    opacity: 0.5;
  }
`;

export const AboutHashtag = styled.a`
  background-color: #182030;
  box-shadow: inset 0 0 0 1px #246;
  color: #9daccc;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0 5px;
  display: inline;
  transition: ${transitionAll};
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 0.8rem;
  &:hover {
    background-color: #273045;
  }
`;

export const AboutListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(160px, 200px));
  padding: 0px;
  overflow: hidden;
  list-style: none;
}
`;
export const AboutListItem = styled.li`
  position: relative;
  font-size: 0.9em;
  margin-bottom: 0.3em;
  padding-left: 1.2em;

  font-size: 0.9rem;
  &:before {
    content: "◈";
    font-size: 0.8em;
    padding-right: 2px;
    color: ${(props) => props.theme.colors.text_secondary};
  }
`;

export const AboutTechnologies = styled.div`
  & > p {
    font-size: 0.9rem;
  }
`;
