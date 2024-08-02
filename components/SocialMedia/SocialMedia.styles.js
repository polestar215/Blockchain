import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";

export const SocialMediaContainer = styled.div`
  display: none;

  @media ${breakpoints.media_screens.landscape_tablet} {
    display: block;
    position: fixed;
    bottom: 0px;
    left: 2rem;
    right: auto;
    z-index: 10;
    width: 40px;
  }
`;

export const SocialMediaList = styled.div`
  display flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;

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
    width: 30px;
    height: 30px;

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
