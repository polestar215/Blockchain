import Link from "next/link";
import { CustomRightContainer, CustomRightContent } from "./CustomRight.styles";

function CustomRight() {
  return (
    <CustomRightContainer>
      <CustomRightContent>
        <Link href="mailto:akim.benchiha@gmail.com" passHref={true}>
          <a rel="noopener noreferrer" aria-label="akim.benchiha@gmail.com">
            akim.benchiha@gmail.com
          </a>
        </Link>
      </CustomRightContent>
    </CustomRightContainer>
  );
}

export default CustomRight;
