import styled from "styled-components";

export const AsideSocialContainer = styled.div`
  grid-area: social;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 75%;
  margin: auto;
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
`;
