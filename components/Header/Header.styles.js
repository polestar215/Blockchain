import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import { transitionAll } from "@/styles/transitions";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  z-index: 11;
  backdrop-filter: blur(10px);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;

  transition: ${transitionAll};

  background: ${(props) =>
    props.isTop ? `transparent` : props.theme.colors.navbar_inner_scrolled};
  box-shadow: ${(props) =>
    props.isTop
      ? `none`
      : `0 1em 1em -1em ${props.theme.colors.navbar_box_shadow}`};

  opacity: ${(props) => (props.isTop ? 1 : 0.9)};

  @media ${breakpoints.media_screens.landscape_tablet} {
    padding: 0 30px;
  }

  @media ${breakpoints.media_screens.desktop} {
    padding: 0 40px;
  }
`;
