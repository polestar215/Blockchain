import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import { transitionAll } from "@/styles/transitions";
export const SomethingContainer = styled.div`
  position: fixed;
  display: none;
  top: 20%;
  left: -90px;
  max-width: 180px;
  min-width: 170px;

  transition: ${transitionAll};
  @media ${breakpoints.media_screens.landscape_tablet} {
    display: block;
    margin-block-end: 20px;
    align-self: center;
  }

  .something-bubble {
    display: none;
    position: absolute;
    right: -80px;
    top: -60px;
    width: 150px;
    background-color: #fff;
    color: black;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 -0.25vmin, 0 0.125vmin;
    z-index: 10;
    font-size: 0.65rem;
    transition: ${transitionAll};
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 40%;
      height: 100%;
      bottom: -53%;
      border-radius: 50%;
      left: 0%;
      box-shadow: 0px 3px, 8px 0px #fff, 8px 0px 0 0;
      clip-path: polygon(0% 41%, 141% 48%, 136% 105%, 65% 100%);
      transition: ${transitionAll};
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
    }
  }

  &:hover {
    cursor: pointer;
    left: -65px;
    & > .something-bubble {
      display: block;
    }
  }
`;
export const BitmojiContainer = styled.div``;
