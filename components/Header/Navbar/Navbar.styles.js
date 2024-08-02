import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import { transitionAll } from "@/styles/transitions";

export const NavContainer = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  counter-reset: item 0;
  width: 100%;
`;

export const NavLinks = styled.div`
  display: none;
  align-items: center;
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.mono};

  @media ${breakpoints.media_screens.landscape_tablet} {
    display: flex;
  }
`;

export const NavList = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const NavListItem = styled.li`
  margin: 0 5px;
  position: relative;
  counter-increment: item 1;

  a {
    padding: 10px;
    color: ${(props) => props.theme.colors.text};
    transition: ${transitionAll};
    &.active {
      color: ${(props) => props.theme.colors.hover_link};
    }
    &:hover {
      color: ${(props) => props.theme.colors.hover_link};
    }
    &:before {
      color: ${(props) => props.theme.colors.numbering};
      font-family: ${(props) => props.theme.fonts.mono};
      font-size: 0.9em;
      content: "0" counter(item) ".";
      margin-right: 5px;
      text-align: right;
    }
  }
`;
