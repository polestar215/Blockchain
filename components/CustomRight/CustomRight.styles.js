import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import { transitionAll } from "@/styles/transitions";

export const CustomRightContainer = styled.div`
  display: none;

  @media ${breakpoints.media_screens.landscape_tablet} {
    display: block;
    position: fixed;
    bottom: 0px;
    right: 2rem;
    left: auto;
    z-index: 10;
    width: 40px;
  }
`;

export const CustomRightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    font-size: 12px;
    padding: 10px;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    transition: ${transitionAll};

    &:hover {
      transform: translateY(-3px);
      color: ${(props) => props.theme.colors.hover_link};
    }
  }

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    margin-block-start: 10px;
    background-color: ${(props) => props.theme.colors.bar};
  }
`;
