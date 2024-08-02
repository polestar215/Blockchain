import breakpoints from "@/styles/breakpoints";
import styled from "styled-components";

export const FeedbackContainer = styled.section`
  max-height: 100vh;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 25%);

  @media ${breakpoints.media_screens.small_desktop} {
    max-width: 900px;
  }

  @media ${breakpoints.media_screens.desktop} {
    max-width: 1000px;
  }
`;
