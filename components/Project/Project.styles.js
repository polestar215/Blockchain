import breakpoints from "@/styles/breakpoints";
import { transitionAll } from "@/styles/transitions";
import styled from "styled-components";

export const ProjectSection = styled.section`
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-break: keep-all;
  padding: 50px 0;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  .mdDisplay {
    display: none;
  }
  .smDisplay {
    display: flex;
  }
  @media ${breakpoints.media_screens.landscape_tablet} {
    .smDisplay {
      display: none;
    }
    .mdDisplay {
      display: flex;
    }
  }
`;

export const ProjectArticle = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 3fr 1fr;
  grid-template-rows: auto 3fr auto minmax(100px, 100px);
  grid-template-areas:
    "title title title title title "
    "preview preview preview preview preview"
    "description description description description description"
    "buttons buttons tags tags tags";
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-block-end: 5rem;
  border-radius: 5px;
  padding: 15px;
  background-color: hsl(219deg 55% 12%);
  cursor: pointer;
  transition: ${transitionAll};
  &:hover {
    box-shadow: 0px 0px 15px -4px #00e0d8;
  }
  @media ${breakpoints.media_screens.landscape_tablet} {
    grid-gap: 1rem;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas: "preview preview preview preview preview description description description description";
    background-color: transparent;
    cursor: default;
    &:hover {
      box-shadow: none;
    }
  }
`;

export const ProjectTitle = styled.h3`
  grid-area: title;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > a {
    color: ${(props) => props.theme.colors.text};
  }
  transition: ${transitionAll};
  &:hover {
    & > a {
      color: ${(props) => props.theme.colors.hover_link};
      outline: none;
    }
  }

  @media ${breakpoints.media_screens.landscape_tablet} {
    justify-content: flex-end;
  }
`;

export const ProjectTitleMd = styled.h4`
  grid-area: title;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media ${breakpoints.media_screens.landscape_tablet} {
    justify-content: flex-end;
  }
`;

export const ProjectType = styled.p`
  @media ${breakpoints.media_screens.landscape_tablet} {
    justify-content: flex-end;
    margin-block-end: 10px;
    color: ${(props) => props.theme.colors.text_secondary};
    font-weight: 400;
    font-size: 14px;
    font-family: ${(props) => props.theme.fonts.mono};
  }
`;

export const ProjectPreview = styled.div`
  grid-area: preview;
  position: relative;
  @media ${breakpoints.media_screens.landscape_tablet} {
    transition: ${transitionAll};
    & a::before {
      transition: ${transitionAll};
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      inset: 0px;
      z-index: 3;
      background-color: hsl(209deg 90% 49% / 57%);
    }
    &:hover {
      & a::before {
        background-color: transparent;
      }
    }
  }
`;

export const ProjectDescriptionContainer = styled.div`
  grid-area: description;
  display: flex;
  @media ${breakpoints.media_screens.landscape_tablet} {
    position: absolute;
    flex-direction: column;
    grid-column: 4 / -1;

    & > a {
      color: ${(props) => props.theme.colors.text};
    }
    transition: ${transitionAll};
    & > a:hover {
      color: ${(props) => props.theme.colors.hover_link};
      outline: none;
    }
  }
`;

export const ProjectDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block-start: 0.9rem;
  margin-inline-start: 0.9rem;
  margin-inline-end: 0.9rem;
  z-index: 10;
  & > p {
    font-weight: 400;
    font-size: 14px;
  }
  @media ${breakpoints.media_screens.landscape_tablet} {
    flex-direction: column;
    margin-block-start: 0rem;
    margin-inline-end: 0rem;
    background-color: hsl(219deg 55% 12%);
    border-radius: 5px;
    padding: 15px;

    & > p {
      font-weight: 400;
      font-size: 14px;
    }
    font-size: 14px;
  }
`;

export const ProjectButtons = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  a {
    color: ${(props) => props.theme.colors.text_secondary};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.text_secondary};
    border-radius: 4px;
    padding: 5px;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${transitionAll};
    margin-inline-end: 1rem;
    margin-block-start: 10px;

    &:hover {
      background-color: ${(props) => props.theme.colors.hover_button};
      outline: none;
    }
  }
  @media ${breakpoints.media_screens.landscape_tablet} {
    width: 100%;
  }
`;

export const ProjectTags = styled.div`
  grid-area: tags;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  @media ${breakpoints.media_screens.landscape_tablet} {
    margin-block-start: 5px;
    width: 100%;
  }
`;

export const ProjectTag = styled.span`
  margin: 1px 2px;
  background-color: #182030;
  box-shadow: inset 0 0 0 1px #246;
  color: #9daccc;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0 5px;
  display: inline;
  font-family: ${(props) => props.theme.fonts.mono};
  transition: ${transitionAll};
  &:hover {
    background-color: #273045;
    cursor: pointer;
  }
`;
