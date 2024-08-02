import breakpoints from "@/styles/breakpoints";
import Link from "next/link";
import styled from "styled-components";

const BackContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const BackArrow = styled.span`
  position: relative;
  font-weight: 700;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text_secondary};
  animation: arrow 700ms linear infinite;

  @keyframes arrow {
    0% {
      margin-left: 0;
    }
    50% {
      margin-left: 5px;
    }
    100% {
      margin-left: 0;
    }
  }
`;

const BackInfo = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
  display: none;
  @media ${breakpoints.media_screens.desktop} {
    display: flex;
  }
`;

function BackToPortfolio() {
  return (
    <BackContainer>
      <Link href="/">
        <a aria-label="Return to Portfolio">
          <BackArrow>←</BackArrow>
          <BackInfo>Back To the Portfolio</BackInfo>
        </a>
      </Link>
    </BackContainer>
  );
}

export default BackToPortfolio;
