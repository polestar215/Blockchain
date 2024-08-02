import akimHey from "@/public/assets/bitmojis/bitmoji-cactus.png";
import Image from "next/image";
import Link from "next/link";
import { BitmojiContainer, SomethingContainer } from "./Something.styles";
function Something() {
  return (
    <Link href="/feedback">
      <a aria-label="Give feedback">
        <SomethingContainer>
          <div className="something-bubble">
            Psst... Yes you ! Come over here. I have something related to
            Ethereum.
          </div>
          <BitmojiContainer>
            <Image
              title="Akim has something related with blockchain"
              src={akimHey}
              alt="Akim has something for your"
              loading="lazy"
              layout="responsive"
              width={398}
              height={398}
            />
          </BitmojiContainer>
        </SomethingContainer>
      </a>
    </Link>
  );
}

export default Something;
