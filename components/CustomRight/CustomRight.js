import Link from "next/link";
import { CustomRightContainer, CustomRightContent } from "./CustomRight.styles";

function CustomRight() {
  return (
    <CustomRightContainer>
      <CustomRightContent>
        <Link href="mailto:blackpolestar215@gmail.com" passHref={true}>
          <a rel="noopener noreferrer" aria-label="blackpolestar215@gmail.com">
            blackpolestar215@gmail.com
          </a>
        </Link>
      </CustomRightContent>
    </CustomRightContainer>
  );
}

export default CustomRight;
