import styled from "styled-components";
import { transitionAll } from "@/styles/transitions";
import breakpoints from "@/styles/breakpoints";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 80px;
  padding: 10px;
  text-align: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.mono};
`;

export const FooterLink = styled.a`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  text-decoration-skip-ink: auto;
  cursor: pointer;
  transition: ${transitionAll};
  &:hover {
    color: ${(props) => props.theme.colors.hover_link};
  }
  p {
    line-height: 2;
    font-size: inherit;
  }
`;

export const FooterSocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 75%;
  margin: 0 auto 10px;
  svg {
    height: fit-content;
    width: fit-content;
    fill: white;
  }
  button,
  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      outline: 0;
      &:before {
        transform: scale(1.2);
        filter: blur(3px);
      }
    }

    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      z-index: -12;
      transform: scale(0.9);
    }
  }
  @media ${breakpoints.media_screens.landscape_tablet} {
    display: none;
  }
`;
