import { transitionAll } from "@/styles/transitions";
import styled from "styled-components";

export const StarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BitmojiRatingContainer = styled.div`
  width: 110px;
  text-align: center;
  overflow: hidden;
  top: 0;
  left: 0;
`;

export const Bitmojis = styled.div`
  position: relative;
  max-height: 110px;
  transition: ${transitionAll};
  transform: ${(props) =>
    props.rating === 1
      ? "translateY(-440px)"
      : props.rating === 2
      ? "translateY(-330px)"
      : props.rating === 3
      ? "translateY(-220px)"
      : props.rating === 4
      ? "translateY(-110px)"
      : "translateY(0px)"};
`;

export const StarRatings = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const StarButton = styled.button`
  border: none;
  position: relative;
  cursor: pointer;
  margin-top: auto;
  outline: none;
  transition: ${transitionAll};
  background: transparent;
  & span {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    background-image: url("/assets/stars/starOff.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &.on {
    & span {
      background-image: url("/assets/stars/starOn.svg");
    }
  }
  &.off {
    & span {
      background-image: url("/assets/stars/starOff.svg");
    }
  }
`;
