import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";

export const FeedFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-inline-start: 1rem;
  margin-inline-end: 1rem;
  margin-block-start: 2rem;
`;

export const FeedForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vw;
  padding: 1rem 1.5rem;
  border-color: rgb(96 165 250 / 1);
  box-shadow: 10px 10px 15px 10px rgb(0 0 0 / 10%),
    0 10px 10px 10px rgb(0 0 0 / 10%);

  @media ${breakpoints.media_screens.landscape_tablet} {
    flex-direction: row;
  }
`;

export const NewFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const FeedInput = styled.input`
  all: unset;
  flex-grow: 1;
  outline: none;
  min-height: 20px;
  box-sizing: border-box;
  background: transparent;
  color: white;
  text-align: right;
  font-size: 0.9rem;
  cursor: text;
  & > ::placeholder {
    color: rgb(107 114 128 / 1);
  }
`;

export const NewFeedMessageContainer = styled.div`
  display: flex;
  background-color: hsl(215deg 69% 14% / 69%);
  border-radius: 4px;
  margin: 6px;
  padding: 8px;
`;

export const NewFeedUserContainer = styled.div`
  display: flex;
  background-color: hsl(215deg 69% 14% / 69%);
  border-radius: 4px;
  margin: 6px;
  padding: 8px;
`;

export const FeedSendButton = styled.button`
  position: relative;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  & > svg {
    margin: 4px;
  }
`;

export const NewFeedStatusInfo = styled.p`
  display: flex;
  justify-content: flex-end;
  & > span {
    text-align: right;
    & > a {
      justify-content: flex-end;
      color: ${(props) => props.theme.colors.text_secondary};
      cursor: pointer;
    }
  }
`;
